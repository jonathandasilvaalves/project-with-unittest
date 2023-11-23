const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth")

const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

module.exports = routes;