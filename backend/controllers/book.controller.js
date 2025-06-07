import mongoose from "mongoose";
import BookModel from "../models/book.model.js";
import { v2 as cloudinary} from 'cloudinary'


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SEC

})


export const getAllBooks = async(req,res) => {
   const searchTerm = req.query.searchTerm
    try {
        const books = await BookModel.find({})
       

        if(searchTerm){
          const searchedBooks = await BookModel.find({
            $or: [
              {bookName: {$regex: searchTerm, options: "i"}},
              {authorName: {$regex: searchTerm, options: "i"}}
            ].sort({createdAt: -1})
              })

            return res.status(200).json({
              data: searchedBooks
          
          })
        }

        if(!books){
        return res.status(401).json({
            success: true,
            data: books,     
        })
        }
        return res.status(200).json({
            success: true,
            data: books     
        })
        
    } catch (error) {
            return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
    }
}

export const getSingleBook = async(req,res) => {

    const {id} = req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ message: ' Invalid id'})
}
  try {

    const book = await BookModel.findById(id)

        if(!book){
        return res.status(401).json({
            success: false,
            message: " Books not found"
         
        })
        }
        return res.status(200).json({
            success: true,
            data: book    
        })
    
  } catch (error) {
            return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }

}


export const createBook = async(req,res) => {

 
    try {
        const {image,bookName, authorName,price,discountPrice,summary} = req.body
        if(!image || !bookName || !authorName || !price || !discountPrice || !summary ){
            return res.status(400).json({
                message: 'Please ill in all field',
            })
        }
const imageResponse =  await cloudinary.uploader.upload(image,{
    folder: "bookstore",
    resource_type: "auto"
})


        const book = await BookModel.create({
            image: imageResponse.secure_url,
            bookName,
            authorName, 
            price, 
            discountPrice,summary})

        return res.status(200).json({
            success: true,
            message: "Book created successfully",
            data:book
        })

        
    } catch (error) {
        console.error("Error message:", error.message)
       return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
    }
}


export const updateBook = async(req,res) => {

        const {id} = req.params
const {image, bookName, authorName, price,discountPrice, status} = req.body

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ message: ' Invalid id'})
}
  try {

    const bookId = await BookModel.findById(id)

        if(!bookId){
        return res.status(401).json({
            success: false,
          message: "Book Not Found" ,
        })
        }

        if(image){
            const parts = bookId.image.split("/")
            const fileName = parts[parts.length-1]
            const imageId = fileName.split('/')[0]
           await cloudinary.uploader.destroy(`bookstore/${imageId}`)
            .then((result) => console.log("result", result))

            const imageResponse = await cloudinary.uploader.upload(image, {
                folder: 'bookstore',
                 resource_type: "auto"
            })

              const books = await  BookModel.findByIdAndUpdate(id,{
            image: imageResponse.secure_url,
            bookName,
            authorName,
            price,
            discountPrice,
            status,
        }, {new: true})



        }


          const books = await  BookModel.findByIdAndUpdate(id,{
            bookName,
            authorName,
            price,
            discountPrice,
            status,
        }, {new: true})


      
        return res.status(200).json({
            success: true,
            message: 'Book Updated successfully',
            data: books     
        })
    
  } catch (error) {
            return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
}

export const deleteBook = async(req,res) => {

        const {id} = req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(401).json({ message: ' Invalid id'})
}
  try {

    const books = await BookModel.findByIdAndDelete(id)

        if(!books){
        return res.status(401).json({
            success: false,
          message: "Book Not Found"  
        })
        }
        
        return res.status(200).json({
            success: true,
          message: 'Deleted successfully' 
        })
    
  } catch (error) {
            return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
  
}

export const booksStats = async(req,res) => {
  try {

     const books = await BookModel.find({})

  const availableBooks = await BookModel.find({ status: 'available' })
    const borrowedBooks = await BookModel.find({ status: 'borrowed' })

        if(!books){
        return res.status(401).json({
            success: true,
            data: books,     
        })
        }
return res.status(200).json({
  success: true,
  books,
  borrowedBooks,
  availableBooks,
})

    
  } catch (error) {
            return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
}


export const searchBooks = async(req,res) => {
  try {
    const searchTerm = req.query.searchTerm || ''

    const books = await BookModel.find({
$or: [
        { bookName: { $regex: searchTerm, $options: 'i' } },
        { authorName: { $regex: searchTerm, $options: 'i' } }
      ]
    }).sort({ createdAt: -1})

    return res.status(200).json({sucess:true, books})
    
  } catch (error) {
                return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });  
    
  }
}

export const borrowBook = async(req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid){
    return res.status(400).json({message: 'invalid message'})
  }

  try {
const book = await BookModel.findById(id)

  if(!book){
        return res.status(401).json({
            success: false,
          message: "Book Not Found" ,
        })
        }


     const newStatus = book.status === "available" ? "borrowed" : "available";

  
    book.status = newStatus;
    await book.save();


        return res.status(200).json({
          success: true,
          message: `Book ${newStatus} successful`,
          data: book
          
        })

    
  } catch (error) {
                return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });  
    
  }

}