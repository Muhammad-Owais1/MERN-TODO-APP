import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

const arr = []

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    try {
        res.send('Hello World!')
    }
    catch(err){
        console.log(err)
    }
})

app.post('/registeruser', (req, res) => {
    try {
        arr.push(req.body)
        res.send(req.body)
    }
    catch(err){
        console.log(err)
    }
})

app.get('/getuser', (req, res) => {
    try{
        res.send(arr)
    }
    catch(err) {
        console.log(err)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})