import films from 'src/static/films.json'

export const filter = {
  film: (text: string, record: Netskope.FilmList.Record) =>
    record.film.includes(text),
}

export const fetchFilms = () => films.list as Netskope.FilmList.Record[]

export const sorter = {
  year: (first: Netskope.FilmList.Record, second: Netskope.FilmList.Record) =>
    first.year >= second.year ? 1 : -1,
}
