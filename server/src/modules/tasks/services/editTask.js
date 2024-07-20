import editTask from "../db/editTask.js";

const editTaskWithID = async (taskid, task) => {
  return await editTask(taskid, task);
};

export default editTaskWithID;
