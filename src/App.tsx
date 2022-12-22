import React, { Suspense, useReducer, useMemo } from 'react'
import { Routes } from 'src/Routes'
import { AppContext } from 'src/components'
import { reducer, setRecord } from 'src/libraries'
import { GlobalCss } from './GlobalCss'

const initialState = {
  record: {} as Netskope.FilmList.Record,
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = useMemo(
    () => ({
      setRecord: setRecord.bind(null, dispatch),
    }),
    [],
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
