const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth");

const SessionController = require("./app/controllers/SessionController");
const CreateUserController = require("./app/controllers/CreateUserController");
const CreateAdminController =  require("./app/controllers/CreateAdminController");
const ScheduleController = require("./app/controllers/ScheduleController");

routes.post("/sessions", SessionController.store);
routes.post("/createuser", CreateUserController.create);

routes.use(authMiddleware);

routes.post("/createadmin", CreateAdminController.create);
routes.post("/createsquedule", ScheduleController.create);

module.exports = routes;