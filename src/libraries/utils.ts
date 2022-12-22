import films from 'src/__mock__/films.json'

export const filter = {
  film: (text: string, record: Netskope.FilmList.Record) =>
    record?.film?.includes(text),
}

export const fetchFilms = () => films

export const isObjectEmpty = (value: any) =>
  Object.keys(value).length === 0 && value.constructor === Object
