import Model from "../model/index.js";

const getOneTask = async (taskID) => {
  try {
    return Model.findById(taskID).populate("user");
  } catch (error) {
    console.log(error);
  }
};

export default getOneTask;
