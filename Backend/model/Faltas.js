const mongoose = require('mongoose')

const FaltasSchema = new mongoose.Schema({
  Bim1: Number,
  Bim2 : Number,
  Bim3 : Number,
  Bim4 : Number,
  materia_id : String,
  nome_materia: String,

})

module.exports = mongoose.model('Faltas', FaltasSchema);