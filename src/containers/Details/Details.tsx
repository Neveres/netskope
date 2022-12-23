/** @jsxImportSource @emotion/react */
import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { AppContext } from 'src/components'
import { KEY, getItem } from 'src/libraries'
import { PagePath } from 'src/Routes'
import { useDb } from 'src/hooks'
import { contentContainer, buttonContainer } from './styles'

const fields = [
  { title: 'Genre', key: 'genre', unit: '' },
  { title: 'Studio', key: 'lead-studio', unit: '' },
  { title: 'User Rating', key: 'audience-score', unit: '%' },
  {
    title: 'Profitability',
    key: 'profitability',
    unit: '%',
    shouldRound: true,
  },
  { title: 'Rotten Tomatoes Rating', key: 'rotten-tomatoes', unit: '%' },
  { title: 'Worldwide Gross', key: 'worldwide-gross', unit: 'm' },
  { title: 'Year Release', key: 'year', unit: '' },
]

const Details = () => {
  const navigate = useNavigate()
  const {
    state: { key, films },
    actions: { setRecord, setFilms },
  } = useContext(AppContext)

  const { getFilms, setFilms: setFilmsToDb } = useDb()

  const [comment, setComment] = useState('')
  const [name, setName] = useState('')

  const onChangeComment = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setComment(event.target.value)
    },
    [],
  )

  const onChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    },
    [],
  )

  const record = films.find((film) => film.key === key)

  const onClickSave = useCallback(() => {
    if (name && comment) {
      const newRecord = {
        ...record,
      } as Netskope.FilmList.Record
      newRecord.comments = newRecord.comments || []
      newRecord.comments.push({ name, message: comment })

      const newFilms = [...films]
      for (let i = 0, maxI = newFilms.length; i < maxI; i++) {
        if (newFilms[i].key === key) {
          newFilms[i] = newRecord
        }
      }

      setFilms(newFilms)
      setFilmsToDb(newFilms)
    }
  }, [name, comment, record, films, setFilms, setFilmsToDb, key])

  const content = useMemo(
    () =>
      fields.map((element) => {
        const { title, key, unit, shouldRound } = element

        return (
          <div key={key}>
            <div className="field-title">{`${title}:`}</div>
            <div className="field-value">{`${
              shouldRound ? Math.round(record?.[key] * 10) / 10 : record?.[key]
            }${unit}`}</div>
          </div>
        )
      }),
    [record],
  )

  const comments = useMemo(
    () =>
      record?.comments.map((comment) => {
        const { name, message } = comment
        return (
          <div key={`${name}-${message}`}>
            <div className="field-title">{`${name}:`}</div>
            <div className="field-value">{`${message}`}</div>
          </div>
        )
      }),

    [record],
  )

  const navigateToHomePage = useCallback(() => {
    navigate(PagePath.Root)
  }, [navigate])

  useEffect(() => {
    if (!key) {
      setRecord(getItem(KEY))
      getFilms().then((filmsInDb) => {
        setFilms(filmsInDb)
      })
    }
  }, [])

  return (
    <>
      <div className="app-header">
        <span className="page-title">{record?.film}</span>
      </div>
      <div css={contentContainer}>
        {content}
        <hr></hr>
        <div className="comments">Comments</div>
        {comments}
        <Input
          placeholder="Your comments"
          style={{ marginBottom: '15px' }}
          value={comment}
          onChange={onChangeComment}
        />
        <Input placeholder="Your name" value={name} onChange={onChangeName} />
      </div>
      <div css={buttonContainer}>
        <Button onClick={navigateToHomePage} style={{ marginRight: '15px' }}>
          Back
        </Button>
        <Button type="primary" onClick={onClickSave}>
          Save
        </Button>
      </div>
    </>
  )
}

export default Details
