import addTask from '../db/addTask.js'

const addUserTask = async (task) => {
    await addTask(task)
}

export default addUserTask