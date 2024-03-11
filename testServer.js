// const request = require('supertest');
// const express = require('express');
// const app = express();
// const clientRoutes = require('../routes/client'); // Asegúrate de ajustar la ruta según corresponda

// // Configuración de las rutas para las pruebas
// app.use('/client', clientRoutes);

// // Exporta el servidor para las pruebas
// module.exports = request(app);


const express = require("express");
const cors = require("cors");


require("dotenv").config();
require("./drivers/conect-db");

const app = express();

//setters
app.set("PORT", 4001);

// middelware (use) sin estas lineas no deja guardar
app.use(cors({ origin: "*" }));
app.use(express.json());


app.use("/client", require("./routes/client"));
app.use("/transaction", require("./routes/transaction"));

app.use("/login", require("./routes/login"));
app.use("/", (req, res) =>
  res.send("Back del proyecto de creación y consumo de APIs")
);
module.exports = app; 
// app.listen(app.get("PORT"), () =>
//   console.log(`server listen on ${app.get("PORT")}`)
// );