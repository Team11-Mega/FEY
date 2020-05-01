const connection = require('../databases/connection')

module.exports = {

    async auth(req,res){
        const {name,email,password } = req.body
        await connection('users').insert({
            name,
            email,
            password
        }).then((response)=>{
            res.json(response)
        }).catch((error)=>{
            res.json(error.message)
        })

    },

    async getUsers(req,res){
        await connection('users').select('*')
        .then(response => {
            res.json(response)
        }).catch(error => {
            res.json(error.message)
        })
    }
}