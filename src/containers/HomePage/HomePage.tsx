import React, { useContext, useEffect } from 'react'
import { FilmList, AppContext } from 'src/components'
import { fetchFilms } from 'src/libraries'
import { useDb } from 'src/hooks'

const HomePage = () => {
  const {
    state: { films },
    actions: { setFilms },
  } = useContext(AppContext)

  const { getFilms, setFilms: setFilmsToDb } = useDb()

  useEffect(() => {
    getFilms().then((filmsInDb) => {
      if (filmsInDb) {
        setFilms(filmsInDb)
      } else {
        const defaultFilms = fetchFilms()
        setFilms(defaultFilms)
        setFilmsToDb(defaultFilms)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <FilmList data={films} />
}

export default HomePage
