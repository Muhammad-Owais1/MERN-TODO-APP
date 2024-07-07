import getData from '../db/login.js'
import bcrypy from 'bcrypt'

const loginUser = async (data) => {
    try {
        const user = await getData(data.email) 
    
        const isPasswordCorrect = bcrypy.compareSync(data.password, user.password)

        if (isPasswordCorrect) {
            return user
        }
    }
    catch(error) {
        console.log(error)
    }
}

export default loginUser