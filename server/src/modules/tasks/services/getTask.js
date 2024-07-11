import getTask from "../db/getTask.js";

const getUserTask = async (uid) => {
  return await getTask(uid);
};

export default getUserTask;
