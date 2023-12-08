const URL ='http://localhost:3000' || process.env.BASE_URL

module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', URL)
  response.setHeader('Access-Control-Allow-Methods', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  next()
}
