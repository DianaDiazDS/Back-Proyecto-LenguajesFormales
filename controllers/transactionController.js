const Transaction = require("../models/model-transaction");

exports.save = async (req, res) => {
  
  const newTransaction = new Transaction(req.body);
  try {
    const data = await newTransaction.save();
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

// exports.update = async (req, res) => {
//   const { id } = req.params;
//   const updateInformation = req.body;
//   const hasDateStart = updateInformation.bookingStartDate !== undefined;
//   const hasDateEnd = updateInformation.bookingEndDate !== undefined;

//   if (hasDateStart || hasDateEnd) {
//     let errorMessage = null;
//     if (
//       hasDateStart &&
//       !validateDates(
//         updateInformation.bookingStartDate,
//         updateInformation.bookingEndDate
//       )
//     ) {
//       errorMessage =
//         "la fecha de inicio es incorrecta (es mayor que la de finalizacion)";
//     } else if (
//       hasDateEnd &&
//       !validateDates(
//         updateInformation.bookingStartDate,
//         updateInformation.bookingEndDate
//       )
//     ) {
//       errorMessage =
//         "la fecha de finalizacion es incorrecta (es menor que la de inicio)";
//     }
//     if (errorMessage) {
//       return res.status(400).json({ state: false, error: errorMessage });
//     }
//   }

//   try {
//     const data = await Reservation.updateOne(
//       { id: id },
//       { $set: updateInformation }
//     );
//     res.status(200).json({ state: true, data: data });
//   } catch (err) {
//     res.status(500).json({ state: false, error: err.message });
//   }
// };

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateInformation = req.body; 

  try {
    const data = await Transaction.updateOne(
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
    const data = await Transaction.find({});
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Transaction.find({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Transaction.deleteOne({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

const validateDates = (bookingStart, bookingEnd) => {
  const start = new Date(bookingStart);
  const end = new Date(bookingEnd);
  return start < end ? true : false;
};
