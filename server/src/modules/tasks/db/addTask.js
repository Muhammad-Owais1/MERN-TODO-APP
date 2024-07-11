import Model from "../model/index.js";

const addTask = async (task) => {
  try {
    return await Model(task).save();
  } catch (error) {
    console.log(error);
  }
};

export default addTask;
