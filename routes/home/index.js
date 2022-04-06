const HomeHandler = require('./handler').HomeHandler;
const Router = require('express').Router;

const homeRouter = Router()
const homeHandler = new HomeHandler()

// get
homeRouter.get('/', homeHandler.demo);

module.exports = {
  homeRouter
}