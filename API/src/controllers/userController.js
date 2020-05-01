const connection = require('../databases/connection')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const hash = require('../config/hash.json')

module.exports = {

    async auth(req, res) {
        const { name, email, password } = req.body

        const user = await connection('users').select('*').where('email', email).first()

        if (!await bcryptjs.compare(password, user.password)) {
            return res.status(400).send({ error: 'invalid password' })
        }

        const token = generateToken({ id: user.id })
        return res.send({
            name,
            email,
            created_at: user.created_at,
            token
        })

    },

    async create(req, res) {
        const { name, email, password } = req.body
        const user = await connection('users').select('*').where('email', email).first()
        if (user) return res.status(400).send({ error: "User already exist!" })
        const encryptPassword = await bcryptjs.hash(password, 10)
        await connection('users').insert({
            name,
            email,
            password: encryptPassword
        }).then((response) => {
            return res.json(response)
        }).catch((error) => {
            return res.json(error.message)
        })

    },

    async getUsers(req, res) {
        await connection('users').select('*')
            .then(response => {
                return res.json(response)
            }).catch(error => {
                return res.json(error.message)
            })
    }
}

function generateToken(params = {}) {
    return jwt.sign(params, hash.token, {
        expiresIn: 86400,
    })
}