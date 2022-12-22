import { openDB } from 'idb'

const NAME_OF_DB = 'films'

interface IFilmsDB {
  films: Netskope.FilmList.Record[]
}

const profilesDB = openDB<IFilmsDB>(`${NAME_OF_DB}-db`, 1, {
  upgrade(db) {
    db.createObjectStore(NAME_OF_DB)
  },
})

export const db = {
  set: async (films: Netskope.FilmList.Record[]) =>
    (await profilesDB).put(NAME_OF_DB, films, NAME_OF_DB),
  get: async () => (await profilesDB).get(NAME_OF_DB, NAME_OF_DB),
}
