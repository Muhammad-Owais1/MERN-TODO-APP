import loginUser from "../services/login.js"

const loginController = async (req, res) => {
    try {
        const user = await loginUser(req.headers)
        
        if(user) {
            res.status(200).send({
                req: req.query,
                status: 200,
                message: "Login successfully",
                loginUser: user
            })
            console.log(req.headers)
        }
        else {
            res.status(401).send({
                req: req.query,
                status: 401,
                message: 'Wrong email or password'
            })
        }
        console.log(req.headers)
    }
    catch(error) {
        res.status(500).send({
            req: req.headers,
            status: 500,
            message: "Internal server error"
        })
        console.log(error)
    }

}

export default loginController