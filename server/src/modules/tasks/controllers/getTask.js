import getUserTask from "../services/getTask.js";

const getTaskController = async (req, res) => {
  try {
    const tasks = await getUserTask({ user: req.query.id });
    console.log(req.query.id);
    res.send({
      req: req.query.id,
      tasks,
    });
  } catch (error) {}
};

export default getTaskController;
