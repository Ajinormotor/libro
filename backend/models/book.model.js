import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({

image: { type: String, required: true},
 bookName: { type: String, required: true , unique: true},
 authorName: { type: String, required: true},
 price:  { type: String, required: true},
 summary: {type: String, required: true},
 discountPrice: { type: String, required: true},
 status: {type: String, enum: ['available', 'borrowed'], default: 'available'},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {timestamps: true})

const Book  = mongoose.model("Book", bookSchema)


export default Book