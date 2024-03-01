// const User = require("../models/model-user");
const User = require("../models/model-client");


const jwt = require("../services/jwt");

exports.validate = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({
    username: username,
    password: password,
  });
  const token = jwt.createToken(user);
  
  if (!user) {
    res.status(404).json({
      state: false,
      error: `Usuario no encontrado.`,
    });
  } else {
    try {
      //aqui le envie la infromacion para tomar el id,postman
      res.status(200).json({ state: true,data: user ,token });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
  }
};
