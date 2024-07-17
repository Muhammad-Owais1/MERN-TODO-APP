import { Router } from "express";
import addTaskController from "./controllers/addTask.js";
import getTaskController from "./controllers/getTask.js";
import getOneTaskController from "./controllers/getOneTask.js";
import authentication from "../../helper/tokenHandler.js";

const router = Router();

router.post("/addtask", authentication, addTaskController);
router.get("/gettasks", getTaskController);
router.get("/gettask", getOneTaskController);

export default router;
