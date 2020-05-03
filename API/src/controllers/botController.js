const bot = require('../chatbot/chatbot')

module.exports = {

    async send(req, res) {
        const { text } = req.body
        const response = await bot.runSample(text)
        res.json({text: response})
    }
}