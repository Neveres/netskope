import { SET_FILMS, SET_RECORD } from 'src/libraries'

export const reducer = (
  state: Netskope.AppContext.State,
  action: Netskope.AppContext.Action,
) => {
  const { type, key, films } = action

  switch (type) {
    case SET_RECORD:
      return {
        ...state,
        key,
      }
    case SET_FILMS:
      return {
        ...state,
        films,
      }
    default:
      return state
  }
}
