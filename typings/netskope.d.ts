export = Netskope
export as namespace Netskope

declare namespace Netskope {
  declare namespace FilmList {
    interface Props {
      data?: Record[]
    }

    interface Record {
      film: string
      genre: string
      'lead-studio': string
      'audience-score': string
      profitability: string
      'rotten-tomatoes': string
      'worldwide-gross': string
      year: string
      [index: string]: any
    }
  }

  declare namespace AppContext {
    type State = {
      films: FilmList.Record[]
      record: FilmList.Record
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setRecord(record: FilmList.Record): void
      setFilms(films: FilmList.Record[]): void
    }
  }
}
