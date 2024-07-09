import { Router } from "express";
import registerController from "./controllers/register.js";
import loginController from "./controllers/login.js";


const router = Router()
router.post('/signup', registerController)
router.post('/login', loginController)


export default router