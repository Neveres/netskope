import React, { useEffect, useState } from 'react'
import { FilmList } from 'src/components'
import { fetchFilms } from 'src/libraries'

const HomePage = () => {
  const [data, setData] = useState({
    list: [] as Netskope.FilmList.Record[],
  })

  useEffect(() => {
    setData(fetchFilms())
  }, [])

  return <FilmList data={data.list} />
}

export default HomePage
