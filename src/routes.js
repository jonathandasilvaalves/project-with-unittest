const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth")

const SessionController = require("./app/controllers/SessionController");
const CreteUserController = require("./app/controllers/CreateUserController");

routes.post("/sessions", SessionController.store);
routes.post("/createuser", CreteUserController.create);

routes.use(authMiddleware);

module.exports = routes;