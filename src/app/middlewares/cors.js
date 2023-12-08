const URL = process.env.BASE_URL ||'http://localhost:3000' 

module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', URL)
  response.setHeader('Access-Control-Allow-Methods', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  next()
}
