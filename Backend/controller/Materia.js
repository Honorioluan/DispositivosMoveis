const Materia = require('../model/Materia')
//CRUDE-Create - Read - Update - DELETE

module.exports = {

    async index(req,res){
        let materias = await Materia.find().sort({name:1})
        return res.json(materias)
    },
    
    async store(req,res){
        const {name} = req.body;
        const materia = await Materia.create({name})
        return res.json(materia)
      },

    async update(req, res){
        let materia = await Materia.findById(req.query.id);
        materia.name = req.body.name;
        materia = await Materia.updateOne({'_id': req.query.id} , materia)

        //materia = await materia.updateOne(materia);
        return res.json({mensagem : 'Atualizar a materia ' + id + ' com os dados do post ' + materia.nome })
    
    },
        
    
    async delete(req,res){
    let materia = await Materia.findById(req.query.id);
    materia = await Materia.deleteOne(materia);
    return res.json(materia);
    },
    
    
    
}
