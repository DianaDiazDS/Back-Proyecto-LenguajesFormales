const routes = require("express").Router();
const {
  save,
  update,
  findAll,
  findId,
  findByCategory,
  deleteTransaction,
} = require("../controllers/transactionController");
// const check = require("../middleware/auth");

routes.get("/",  findAll);
routes.get("/:id", findId);
routes.get("/categoria/:category", findByCategory);


routes.post("/", save);
routes.patch("/:id",  update);
routes.delete("/:id", deleteTransaction);

module.exports = routes;
