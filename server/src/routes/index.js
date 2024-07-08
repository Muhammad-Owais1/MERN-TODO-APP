import { Router } from "express";
import userRoutes from "../modules/user/routes.js"
import taskRoutes from "../modules/tasks/routes.js"

const router = Router()


router.use('/user', userRoutes)
router.use('/task', taskRoutes)


export default router