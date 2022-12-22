/*
 * action type
 */
export const SET_RECORD = 'SET_RECORD'

/*
 * action creator
 */
export const setRecord = (
  callback: (action: Netskope.AppContext.Action) => void,
  record: Netskope.FilmList.Record,
) => {
  callback({
    type: SET_RECORD,
    record,
  })
}
