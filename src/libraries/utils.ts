import films from 'src/static/films.json'

export const filter = {
  film: (text: string, record: Netskope.FilmList.Record) =>
    record.film.includes(text),
}

export const fetchFilms = () => films.list as Netskope.FilmList.Record[]

export const isObjectEmpty = (value: any) =>
  Object.keys(value).length === 0 && value.constructor === Object
