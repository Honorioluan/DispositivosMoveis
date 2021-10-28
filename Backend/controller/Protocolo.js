const Protocolo = require('../model/Protocolo');

module.exports = {

  async index(req, res) {
    let protocolos = await Protocolo.find()
    return res.json(protocolos);
  },

  async store(req, res) {
    let protocolo = req.body;
    protocolo = await Protocolo.create(protocolo)
    return res.json(protocolo);
  },

 

  async update(req, res){
    let protocolos = await Protocolo.findById(req.query.id);
    protocolos.name = req.body.name;
    protocolos = await Protocolos.updateOne({'_id': req.query.id} , protocolos)

    return res.json({mensagem : 'Atualizar a materia ' + id + ' com os dados do post ' + protocolos.nome })

},

async delete(req,res){
    let protocolos = await Protocolos.findById(req.query.id);
    protocolos = await Protocolos.deleteOne(protocolos);
    return res.json(protocolos);
    },
    

  
}