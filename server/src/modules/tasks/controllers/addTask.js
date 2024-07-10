import addUserTask from "../services/addTask.js"

const addTaskController = async (req, res) => {
    try {
        await addUserTask(req.body)
        res.status(201).send({
            req: req.body,
            message: "Task added successfully.",
            status: 201
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            req: req.body,
            message: "Cannot add task.",
            status: 500
        })
    }
}

export default addTaskController