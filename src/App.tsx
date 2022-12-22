import React, { Suspense, useReducer, useMemo } from 'react'
import { Routes } from 'src/Routes'
import { AppContext } from 'src/components'
import { reducer, SET_FILMS, SET_RECORD } from 'src/libraries'
import { GlobalCss } from './GlobalCss'

const initialState = {
  films: [] as Netskope.FilmList.Record[],
  key: '',
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = useMemo(
    () => ({
      setRecord(key: Netskope.FilmList.Record['key']) {
        dispatch({ type: SET_RECORD, ...state, key })
      },
      setFilms(films: Netskope.FilmList.Record[]) {
        dispatch({ type: SET_FILMS, ...state, films })
      },
    }),
    [state],
  )

  const valueOfAppContext = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions],
  )

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContext.Provider value={valueOfAppContext}>
          <Routes />
        </AppContext.Provider>
      </Suspense>

      <GlobalCss />
    </>
  )
}

export default App
