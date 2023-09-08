import Express from 'express'

const app = Express()

app.get('/', (req, res, next) => {
    res.send('Hola Mundo')
})


app.listen(3000, () => {
    console.log(`Escuchando puerto: 3000`)
})