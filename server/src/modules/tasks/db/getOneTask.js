import Model from "../model/index.js";

const getOneTask = async (taskID) => {
  try {
    return Model.findById(taskID);
  } catch (error) {}
};

export default getOneTask;
