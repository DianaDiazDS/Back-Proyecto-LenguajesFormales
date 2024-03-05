const User = require("../models/model-client");
const jwt = require("../services/jwt");

exports.validate = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });

    if (!user) {
      res.status(404).json({
        state: false,
        error: `Usuario no encontrado.`,
      });
    } else {
      const token = jwt.createToken(user);

      res.status(200).json({ state: true, data: user, token });
    }
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};
