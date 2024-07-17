import getOneTask from "../db/getOneTask.js";

const getTaskByTaskID = async (taskID) => {
  return getOneTask(taskID);
};

export default getTaskByTaskID;
