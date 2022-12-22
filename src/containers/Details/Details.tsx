/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { AppContext } from 'src/components'
import { KEY, getItem, isObjectEmpty } from 'src/libraries'
import { PagePath } from 'src/Routes'
import { contentContainer } from './styles'

const DEFAULT_VALUE = 'N/A'

const fields = [
  { title: 'Name', key: 'film' },
  { title: 'Genre', key: 'genre' },
  { title: 'Studio', key: 'lead-studio' },
  { title: 'User Rating', key: 'audience-score' },
  { title: 'Profitability', key: 'profitability' },
  { title: 'Rotten Tomatoes Rating', key: 'rotten-tomatoes' },
  { title: 'Worldwide Gross', key: 'worldwide-gross' },
  { title: 'Year Release', key: 'year' },
]

const Details = () => {
  const navigate = useNavigate()
  let {
    state: { record },
  } = useContext(AppContext)

  if (isObjectEmpty(record)) {
    record = getItem(KEY) || {}
  }

  const content = useMemo(
    () =>
      fields.map((element) => {
        const { title, key } = element
        return (
          <div key={key}>
            <h2>{`${title}: `}</h2>
            <div className="field-value">{record[key] || DEFAULT_VALUE}</div>
          </div>
        )
      }),
    [record],
  )

  const navigateToHomePage = useCallback(() => {
    navigate(PagePath.Root)
  }, [navigate])

  return (
    <>
      <div className="app-header">
        <span className="page-title">Film Details</span>
      </div>
      <div css={contentContainer}>{content}</div>
      <Button
        type="primary"
        onClick={navigateToHomePage}
        style={{ display: 'block', margin: 'auto' }}
      >
        Back
      </Button>
    </>
  )
}

export default Details
