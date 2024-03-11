const routes = require("express").Router();
const {
  save,
  update,
  findAll,
  findId,
  deleteClient,
  findByUsername,
} = require("../controllers/clientController");
const check = require("../middleware/auth");


routes.get("/",  findAll);
routes.get("/:id", findId);
routes.get("/username/:username", findByUsername);
routes.post("/",  save);


routes.patch("/:id",  update);
routes.delete("/:id",  deleteClient);

module.exports = routes;
