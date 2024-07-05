import registerUser from "../services/register.js"

const registerController = async (req, res) => {
    try {
        res.send(req.body)
        await registerUser(req.body)
        console.log(req.body)
    }
    catch (err) {
        console.log(err)
    }
}

export default registerController