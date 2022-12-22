import { createContext } from 'react'

const AppContext = createContext(
  {} as {
    state: Netskope.AppContext.State
    actions: Netskope.AppContext.Actions
  },
)

export default AppContext
