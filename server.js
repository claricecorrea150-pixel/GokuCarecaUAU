import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

const dragonball = []

servidor.get('/dragonball', (req, res) => {
    res.send(dragonball)
})

servidor.post('/dragonball', (req, res) => {
    const personagem = req.body
    dragonball.push(personagem)

    res.send('personagem cadastrado!')
})

servidor.listen(3000, () => {console.log('deu bom')})
