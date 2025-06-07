import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import { v2 as cloudinary} from 'cloudinary'
import { errHandler } from "./middleware/errHandler.js";
import cors from 'cors'
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import bookRoutes from "./routes/book.routes.js"
import userRoutes from "./routes/user.route.js"
import notificationRoutes from "./routes/notification.routes.js"

import path from "path"

const __dirname = path.resolve()

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SEC
})
const app = express()
const PORT = process.env.PORT || 3000



app.use(express.json({limit: "20mb"}))

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/users', userRoutes)
app.use('/api/notification', notificationRoutes )





if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, "frontend", "dist")))

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.use('/', (req,res, next) => {
    res.status(404).json({
        message: "Route Not Found"
    })
})


app.use(errHandler)


app.listen(PORT, () => {
    connectDB(),
    console.log(`Server is listening at ${PORT}`)
})