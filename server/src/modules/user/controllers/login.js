import loginUser from "../services/login.js"

const loginController = async (req, res) => {
    try {
        const user = await loginUser(req.body)
        
        if(user) {
            res.status(200).send({
                req: req.body,
                status: 200,
                message: "Login successfully",
                loginUser: user
            })
            console.log(req.body)
        }
        else {
            res.status(401).send({
                req: req.body,
                status: 401,
                message: 'Wrong email or password'
            })
        }
        console.log(req.body)
    }
    catch(error) {
        res.status(500).send({
            req: req.body,
            status: 500,
            message: "Internal server error"
        })
        console.log(error)
    }

}

export default loginController