import Model from '../model/index.js'

const addTask = (task) => {
    try {
        return Model(task).save()
    }
    catch(error) {
        console.log(error)
    }
}

export default addTask