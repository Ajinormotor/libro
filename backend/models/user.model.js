import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    fullName: { required: true, type: String},
    email: { required: true, type: String, unique: true},
    password: { required: true, type:String},
    role: { type:String, enum: ['user', 'admin'] , default: 'user'},
    status: {type: String, enum: ['suspended', 'active'], default: 'active'},
    profileImage: {type: String, requied: true}
}, {timestamps: true});

const User = mongoose.model("User", userSchema)

export default User