const User = require('../model/User')
//CRUDE-Create - Read - Update - DELETE

module.exports = {

    async index(req,res){
        let users = await User.find()
        return res.json(users)
    },
    
    async store(req,res){
        const {name, email, ra, pwd} = req.body;
        const user = await User.create({name, email, ra, pwd})
        return res.json(user)
      },

    async update(req, res){
        var id = req.query.id;
        
        let user = await User.findById(id);
        user.name = req.body.name;
        user.email = req.body.email;
        user.age = req.body.age;
        user.password = req.body.password;
        user = await User.updateOne({'_id': req.query.id} , user)

        //user = await User.updateOne(user);
        return res.json({mensagem : 'Atualizar o user ' + id + ' com os dados do post ' + user.nome })
    
    },
        
    
    async delete(req,res){
    var id = req.querry.id;
    let user = await User.findById(id);
    user = await User.deleteOne(user);
    return res.json(user);
    },

    
    
    async validation(req, res){
        const {ra,pwd} = req.body;
    
        let users = await User.findOne({ra : ra, pwd : pwd })
        console.log(users);
    
        if(users == null){
          console.log('401')
          return res.status(203).json({mensagem: 'RA Não econtrado'})
        }else{
          return res.status(200).json(users)
        }
    
    
    },
}
