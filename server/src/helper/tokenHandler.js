import jwt from 'jsonwebtoken'
import 'dotenv/config'

const authentication = (req, res, next) => {
    console.log(req.headers)
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(403).send({
            status: 403
        })
    }
    const token = authorization.split(" ")[1]
    jwt.verify(token, (result) => {
        console.log("result", process.env.JWT_SECRET, result)
    })
    if(result){
        next()
    }
    else {
        res.status(403).send({
            status: 403
        })
    }
}

export default authentication