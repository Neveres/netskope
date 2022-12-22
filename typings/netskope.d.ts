export = Netskope
export as namespace Netskope

declare namespace Netskope {
  declare namespace FilmList {
    interface Props {
      data?: Record[]
    }

    interface Comment {
      name: string
      message: string
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
      comments: Comment[]
      key: string
      [index: string]: any
    }
  }

  declare namespace AppContext {
    type State = {
      films: FilmList.Record[]
      key: FilmList.Record['key']
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setRecord(key: FilmList.Record['key']): void
      setFilms(films: FilmList.Record[]): void
    }
  }
}
