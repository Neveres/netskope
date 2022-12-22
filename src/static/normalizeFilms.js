const fs = require('fs')

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
