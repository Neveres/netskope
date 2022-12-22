import { SET_RECORD } from 'src/libraries'

export const reducer = (
  state: Netskope.AppContext.State,
  action: Netskope.AppContext.Action,
) => {
  const { type, record } = action

  switch (type) {
    case SET_RECORD:
      return {
        ...state,
        record,
      }
    default:
      return state
  }
}
