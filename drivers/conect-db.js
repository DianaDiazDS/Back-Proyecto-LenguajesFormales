const mongoose = require("mongoose");

/**Remota*/
const URI = `mongodb+srv://admin:admin@cluster0.jandnyi.mongodb.net/proyecto_formales`;


mongoose.set("strictQuery", false);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Conect with database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
