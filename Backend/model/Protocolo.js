const mongoose = require('mongoose')

const ProtocolosSchema = new mongoose.Schema({
  nome : String,


})

module.exports = mongoose.model('Protocolos', ProtocolosSchema);