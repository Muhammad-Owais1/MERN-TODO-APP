import { Router } from "express"
import addTaskController from "./controllers/addTask.js"

const router = Router()

router.post('/addtask', addTaskController)


export default router