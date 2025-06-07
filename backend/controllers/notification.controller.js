import BookModel from "../models/book.model.js"
import NotificationModel from "../models/notification.js"
import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"

export const createNotification = async(req,res) => {
try {
    const {messages} = req.body
      const {token} = req.cookies
      
      if(!token) {
    return res.status(401).json({ message:'invalid token'})
  }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    console.log("Decoded:", decoded)
    const user = await UserModel.find(decoded.user).select("-password")
        console.log("user:", user)

    req.user = user

    if(!messages) {
        return res.status(401).json({ message: "Message field cannot be empty"})
    }
    
  const notification = await NotificationModel.create({ messages,
    user: req.user.id,
    })
    console.log("user:", user)

    return res.status(201).json({ 
        success: true,
         message: "Created successfully",
         data:  notification
        })
    
} catch (error) {
    console.log('CreateNotificaion error:',error.message)
    return res.status(500).json({
        message: "Internal server error",
    })
    
}
}

export const bookNotification = async (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
  

    try {
        const books = await BookModel.find({}).sort({ createdAt: -1 }).limit(limit);
        const notifications = await NotificationModel.find({}).sort({ createdAt: -1 }).limit(limit);

        if (!books || books.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        const latestBook = books[0]
        const latestMessage = notifications[0]
        const message = `${latestBook.bookName} has been added`

        return res.status(200).json({
            success: true,
            data: {
                message,
                book: latestBook,
                notifMsg: latestMessage
            }
        });

    } catch (error) {
        console.error('bookNotification error:', error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
