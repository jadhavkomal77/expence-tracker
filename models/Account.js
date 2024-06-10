const mongoose = require("mongoose")

const accountShema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true, enum: ["credit", "debit"] },
})

module.exports = mongoose.model("account", accountShema)