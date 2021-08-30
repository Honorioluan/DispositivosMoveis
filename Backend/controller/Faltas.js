const Faltas = require('../model/Faltas')
//CRUDE-Create - Read - Update - DELETE

module.exports = {

    async index(req,res){
        let faltas = await Faltas.find();
        return res.json(faltas)
    },

  
    async store(req,res){
        let faltas = req.body;
        faltas = await Faltas.create(faltas)
        return res.json(faltas)
      },

    async update(req, res){
        let faltas = await Faltas.findById(req.query.id);
        faltas.name = req.body.name;
        faltas = await Faltas.updateOne({'_id': req.query.id} , faltas)

        //materia = await materia.updateOne(materia);
        return res.json({mensagem : 'Atualizar a materia ' + id + ' com os dados do post ' + faltas.nome })
    
    },
        
    
    async delete(req,res){
    let faltas = await Faltas.findById(req.query.id);
    faltas = await Faltas.deleteOne(faltas);
    return res.json(faltas);
    },
    
    
    
}