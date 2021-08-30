const Notas = require('../model/Notas')
//CRUDE-Create - Read - Update - DELETE

module.exports = {

    async index(req,res){
        let notas = await Notas.find();
        return res.json(notas)
    },

  
    async store(req,res){
        let notas = req.body;
        notas = await Notas.create(notas)
        return res.json(notas)
      },

    async update(req, res){
        let notas = await Notas.findById(req.query.id);
        notas.name = req.body.name;
        notas = await Notas.updateOne({'_id': req.query.id} , notas)

        //materia = await materia.updateOne(materia);
        return res.json({mensagem : 'Atualizar a materia ' + id + ' com os dados do post ' + notas.nome })
    
    },
        
    
    async delete(req,res){
    let notas = await Notas.findById(req.query.id);
    notas = await Notas.deleteOne(notas);
    return res.json(notas);
    },
    
    
    
}