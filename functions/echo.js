const fetch = require('node-fetch')

console.log('log 1')

exports.handler = async () => {
  console.log(2)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: '123' }),
  }
}
