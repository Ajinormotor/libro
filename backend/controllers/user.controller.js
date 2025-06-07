import mongoose from "mongoose";
import UserModel from "../models/user.model.js";




export const getAllUser = async(req,res) => {
    try {
        const user = await UserModel.find({})

        return res.status(200).json({
            success:true,
            data: user
        })
        
    } catch (error) {
             return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
    
}

export const getSingleUser = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({ mesaage: 'invalid id'})
    }

      try {
        const user = await UserModel.findById(id)

        if(!user) {
            return  res.status(400).json({
                message: "user not found"
            })
            
        }

        
        return res.status(200).json({
            success:true,
            data: user
        })
        
        
    } catch (error) {
             return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
    
    
}





export const updateUser = async(req,res) => {

        const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({ mesaage: 'invalid id'})
    }
      try {

            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

        if(!user) {
            return  res.status(400).json({ message: "user not found"})    
        }

        
        return res.status(200).json({
            success:true,
            message: 'Update successful',
            data: user
        })
        
        
    } catch (error) {
             return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
}


export const deleteUser = async(req,res) => {

        const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({ mesaage: 'invalid id'})
    }
      try {

            const user = await UserModel.findByIdAndDelete(id)

        if(!user) {
            return  res.status(400).json({ message: "user not found"})    
        }

        
        return res.status(200).json({
            success:true,
            message: 'deleted successful',
           
        })
        
        
    } catch (error) {
             return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });   
  }
    
}

export const userStats = async(req,res) => {

    try {
        const user = await UserModel.find({})
        if(!user){
            return res.status(404)
        }
        const activeUser = await UserModel.find({status: 'active'})
           const suspendedUser = await UserModel.find({status: 'suspended'})


           return res.status(200).json({
            success: true,
            user,
            suspendedUser,
            activeUser
           })
        
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error"
        })
        
    }
}



