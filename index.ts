import express from 'express'
import userRoutes from './routes/user.route'



const app = express()

app.use(express.json())

app.use('/', userRoutes)



app.listen(3000, () => {
    console.log(`Escuchando puerto: 3000`)
})