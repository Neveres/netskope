/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback, useEffect } from 'react'
import { Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { AppContext } from 'src/components'
import { KEY, getItem } from 'src/libraries'
import { PagePath } from 'src/Routes'
import { useDb } from 'src/hooks'
import { contentContainer } from './styles'

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

  const { getFilms } = useDb()

  const record = films.find((film) => film.key === key)

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
        <Input placeholder="Your comments" style={{ marginBottom: '15px' }} />
        <Input placeholder="Your name" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={navigateToHomePage} style={{ marginRight: '15px' }}>
          Back
        </Button>
        <Button type="primary">Save</Button>
      </div>
    </>
  )
}

export default Details
