import Model from "../model/index.js";
import mongoose from "mongoose";

const getTask = async (uid) => {
  try {
    return await Model.find(uid);
  } catch (error) {}
};

export default getTask;
