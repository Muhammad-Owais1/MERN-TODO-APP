import addTask from '../db/addTask.js'

const addUserTask = async (task) => {
    addTask(task)
}

export default addUserTask