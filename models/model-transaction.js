const mongoose = require("mongoose");
const { Schema } = mongoose;

// required: true  para que lo ingresen el json
// unique: true,  debe ser unico
const Schematransaction = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
   
  },
  status: {
    type: String,
    required: true,
  },
  entityname: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },

  paymentDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
 
  client: {
    type: Schema.Types.ObjectId,
    ref: "client",
  },
});

module.exports = mongoose.model("transaction", Schematransaction);
