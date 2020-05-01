const jwt = require('jsonwebtoken')
const hash = require('../config/hash.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader) return res.status(401).send({error:"No token provider"})

    const parts = authHeader.split(" ")
    if(!parts==2) return res.status(401).send({error:"token error"})

    const [schema, token] = parts

    //verificando se é um token de estrutura valida
    if (!/^Bearer$/i.test(schema)) 
        return res.status(401).send({ error: "token malFormatted" })

    
        //verificando validadando token
    jwt.verify(token, hash.token, (err, decoded) => {

        if (err)
         return res.status(401).send({ error: "token invalid" })

        req.userId = decoded.id
        return next()
    })

}