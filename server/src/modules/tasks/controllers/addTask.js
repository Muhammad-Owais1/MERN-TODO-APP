import addUserTask from "../services/addTask.js"

const addTaskController = async (req, res) => {
    try {
        await addUserTask(req.body)
        res.send(
            req.body
        )
    }
    catch(error){
        console.log(error)
    }
}

export default addTaskController