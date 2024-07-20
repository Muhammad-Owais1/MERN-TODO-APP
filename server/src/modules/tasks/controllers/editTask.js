import editTaskWithID from "../services/editTask.js";

const editTaskController = async (req, res) => {
  try {
    res.send(await editTaskWithID(req.params.id, req.body));
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

export default editTaskController;
