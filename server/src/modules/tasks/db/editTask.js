import Model from "../model/index.js";

const editTask = async (taskid, task) => {
  const { taskName, status, description } = task;
  return await Model.findByIdAndUpdate(
    taskid,
    {
      task: taskName,
      status,
      description,
    },
    { new: true, runValidators: true }
  );
};

export default editTask;
