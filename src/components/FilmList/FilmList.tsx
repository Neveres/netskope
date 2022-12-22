/** @jsxImportSource @emotion/react */
import React, { useMemo, useContext } from 'react'
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSearch } from 'src/hooks'
import { filter, setItem, KEY, sorter } from 'src/libraries'
import { AppContext } from 'src/components'
import { PagePath } from 'src/Routes'
import { toolBarContainer } from './styles'
import type { ColumnsType } from 'antd/es/table'

const PAGE_SIZE = 10

const FilmList: React.FC<Netskope.FilmList.Props> = ({ data = [] }) => {
  const { text, Search } = useSearch()
  const {
    actions: { setRecord },
  } = useContext(AppContext)
  const navigate = useNavigate()

  const columns: ColumnsType<Netskope.FilmList.Record> = useMemo(
    () => [
      {
        title: 'Film',
        dataIndex: 'film',
        key: 'film',
        width: '50%',
      },
      {
        title: 'Year Release',
        dataIndex: 'year',
        key: 'year',
        width: '40%',
        sorter: sorter.year,
      },
      {
        title: '',
        key: '',
        width: '10%',
        render: (_, record) => (
          <a
            onClick={() => {
              setRecord(record.key)
              setItem(KEY, record.key)
              navigate(PagePath.Details)
            }}
          >
            Details
          </a>
        ),
      },
    ],
    [navigate, setRecord],
  )

  const filteredData = useMemo(
    () => data.filter(filter.film.bind(null, text)),
    [data, text],
  )

  return (
    <>
      <div className="app-header">
        <span className="page-title">Movies</span>
      </div>
      <div css={toolBarContainer}>{Search}</div>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: PAGE_SIZE, showSizeChanger: false }}
        bordered
        style={{ margin: '10px' }}
      />
    </>
  )
}

export default FilmList
