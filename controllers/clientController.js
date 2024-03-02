const Client = require("../models/model-client");

exports.save = async (req, res) => {
  
    const newClient = new Client(req.body);
    try {
      const data = await newClient.save();
      res.status(200).json({ state: true, data: data });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
  
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateInformation = req.body;

    try {
    const data = await Client.updateOne(
      { id: id },
      { $set: updateInformation }
    );
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Client.find({});
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Client.find({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};




exports.findByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    // Busca un cliente por nombre de usuario y popula las transacciones
    const client = await Client.findOne({ username: username }).populate("transactions");

    if (client) {
      res.status(200).json({ state: true, data: client });
    } else {
      res.status(404).json({
        state: false,
        error: `Cliente con nombre de usuario '${username}' no encontrado.`,
      });
    }
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};
exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Client.deleteOne({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

const validateEmail = (correo) => {
  var expresionRegularCorreo =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   return expresionRegularCorreo.test(correo);
return true

};
const validateCelPhone = (phone) => {
  var phoneExpresion = /^[0-9]{10}$/;
//   return phoneExpresion.test(phone);
return true
};
