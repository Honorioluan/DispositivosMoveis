const mongoose = require('mongoose')

const NotasSchema = new mongoose.Schema({
  "1-Bim": Number,
  "2-Bim" : Number,
  "3-Bim" : Number,
  "4-Bim" : Number,
  materia_id : String,

})

module.exports = mongoose.model('Notas', NotasSchema);