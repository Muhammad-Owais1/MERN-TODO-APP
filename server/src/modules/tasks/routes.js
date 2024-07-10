import { Router } from "express"
import addTaskController from "./controllers/addTask.js"
import authentication from "../../helper/tokenHandler.js"

const router = Router()

router.post('/addtask', authentication, addTaskController)


export default router