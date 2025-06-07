import mongoose from "mongoose";



const notificationScehma = new mongoose.Schema({
    messages: {type: String , required: [true, 'Message is cannot be empty']},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
},{ timestamps: true})


const Notification = mongoose.model("Notificattion", notificationScehma)


export default Notification