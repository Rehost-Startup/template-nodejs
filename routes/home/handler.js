class HomeHandler {
  demo(req, res) {
    res.status(200).send('Hello World')
  }
}

module.exports = {
  HomeHandler
}