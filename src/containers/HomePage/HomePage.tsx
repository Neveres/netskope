import React, { useContext, useEffect } from 'react'
import { FilmList, AppContext } from 'src/components'
import { fetchFilms } from 'src/libraries'

const HomePage = () => {
  const {
    state: { films },
    actions: { setFilms },
  } = useContext(AppContext)

  useEffect(() => {
    setFilms(fetchFilms())
  }, [setFilms])

  return <FilmList data={films} />
}

export default HomePage
