import React, { useEffect, useState } from 'react'
import { FilmList } from 'src/components'
import { fetchFilms } from 'src/libraries'

const HomePage = () => {
  const [data, setData] = useState({
    films: [] as Netskope.FilmList.Record[],
  })

  useEffect(() => {
    setData(fetchFilms())
  }, [])

  return <FilmList data={data.films} />
}

export default HomePage
