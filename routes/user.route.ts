import { Router } from "express"

const router = Router()

type User = {
    id: number,
    name: string
}

router.get('/', (req, res, next) => {
    res.send('Hola Mundo')
})

router.post('/', (req, res, next) => {
    const {name} = req.body as User

    console.log(name)

    res.json(name)
})

export default router