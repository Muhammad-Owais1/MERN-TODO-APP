import getTaskByTaskID from "../services/getOneTask.js";

const getOneTaskController = async (req, res) => {
  try {
    res.send(await getTaskByTaskID(req.query.id));
  } catch (error) {}
};

export default getOneTaskController;
