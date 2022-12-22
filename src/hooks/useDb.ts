import { db } from 'src/libraries'

export const useDb = () => {
  return {
    getFilms: async () => await db.get(),
    setFilms: (films: Netskope.FilmList.Record[]) => {
      db.set(films)
        .then(
          () => {
            console.log('Set films to IndexedDB successfully!')
          },
          () => {
            console.log('Fail to set films to IndexedDB')
          },
        )
        .catch(() => {
          console.log('Fail to set films to IndexedDB')
        })
    },
  }
}
