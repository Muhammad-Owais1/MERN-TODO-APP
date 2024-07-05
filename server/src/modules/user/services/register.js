import addData  from '../db/index.js'

const registerUser = async (data) => {
    return await addData(data)
}

export default registerUser