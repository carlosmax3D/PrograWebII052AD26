const mongoose = require("mongoose");
const rolesSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: [true, "Debe ser el nombre de rol"]
  }});

const Roles = mongoose.model("Roles", rolesSchema);
module.exports = Roles;