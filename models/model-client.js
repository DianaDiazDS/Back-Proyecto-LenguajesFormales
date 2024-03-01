const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchemaClient = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  celphone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },


  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "transaction",
    },
  ],
});

module.exports = mongoose.model("client", SchemaClient);
