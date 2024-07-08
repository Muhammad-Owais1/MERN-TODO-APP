import mongoose, {Schema} from "mongoose";

const dataSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["incomplete", "complete"],
        default: "incomplete"
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User"
    // }
})

const Model = mongoose.model('Task', dataSchema)
export default Model