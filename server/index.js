import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose, { mongo } from 'mongoose'
import "dotenv/config";

import routes from './src/routes/index.js'

const app = express()
const port = 3000

const arr = []

app.use(cors())
app.use(helmet())
app.use(express.json())



mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8xt5rus.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
// mongoose.connect('mongodb://localhost:2000')


mongoose.connection.on("connected", () => {
    console.log('db connected')
})



app.get('/', (req, res) => {
    try {
        res.send('Hello World!')
    }
    catch (err) {
        console.log(err)
    }
})

app.use('/api', routes)


app.get('/getuser', (req, res) => {
    try {
        res.send(arr)
    }
    catch (err) {
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})