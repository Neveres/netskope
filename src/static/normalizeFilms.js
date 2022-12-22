const fs = require('fs')

const generateUuid = () => {
  let nowOfDate = Date.now()

  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    nowOfDate += performance.now()
  }

  const result = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (character) => {
      const remains = (nowOfDate + Math.random() * 16) % 16 | 0
      nowOfDate = Math.floor(nowOfDate / 16)
      return (character === 'x' ? remains : (remains & 0x3) | 0x8).toString(16)
    },
  )
  return result
}

fs.readFile('./src/static/movies.csv', 'utf8', function (err, data) {
  if (err) {
    throw err
  }

  const keys = [
    'film',
    'genre',
    'lead-studio',
    'audience-score',
    'profitability',
    'rotten-tomatoes',
    'worldwide-gross',
    'year',
  ]
  const lastIndexOfKeys = keys.length - 1
  const result = { list: [] }
  const films = data.toString().split('\n')
  for (let i = 1, maxi = films.length; i < maxi; i++) {
    const record = films[i]
      .split(',')
      .reduce((accumulator, currentValue, index) => {
        if (index === lastIndexOfKeys) {
          currentValue = currentValue.replace('\r', '')
        }

        const key = keys[index]
        accumulator[key] = currentValue
        return accumulator
      }, {})

    record.comments = []
    record.key = generateUuid()
    result.list.push(record)
  }

  fs.writeFile(
    './src/static/films.json',
    JSON.stringify(result),
    'utf8',
    (err) => {
      if (err) {
        console.log('An error occured while writing JSON Object to File.')
        return console.log(err)
      }

      console.log('JSON file has been saved.')
    },
  )
})
