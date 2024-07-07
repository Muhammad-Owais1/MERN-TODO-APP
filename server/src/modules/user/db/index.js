import Model from '../models/index.js'


const addData = (data) => {
    try {
        return new Model(data).save()
    }
    catch(error) {
        console.log(error)
    }
}


export {
    addData
}