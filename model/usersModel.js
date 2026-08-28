const mongoose = require("mongoose");
const usuariosSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: [true, "Debe ser el nombre de usuario"]
  },
  rol: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' }
});

const Usuarios = mongoose.model("Users", usuariosSchema);
module.exports = Usuarios;