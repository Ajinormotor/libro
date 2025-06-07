import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utility/generateToken.js";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(401).json({ message: "Please fill in all field" });
  }

  try {

    const hashedPassword = bcrypt.hashSync(password, 10)

const profileResponse = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${fullName}`

    const userDoc = await UserModel.create({

      fullName,
      email,
      password: hashedPassword,
      profileImage: profileResponse
    });

    // jwt
    const token = generateToken(res, userDoc._id);

    return res
      .status(200)
      .json({
        success: true,
        message: "Registered successful",
        data: userDoc,
        token,
      });
  } catch (error) {
    console.error("register Error:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
  //
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "Please fill in all field" });
  }
  try {
    const userDoc = await UserModel.findOne({email});
    if (!userDoc) {
      return res.status(404).json({ message: "Invalid credebtials" });
    }


    const checkPassword = await bcrypt.compare(password, userDoc.password);
    if (!checkPassword) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = generateToken(res, userDoc);


        const userData = userDoc.toObject();
    delete userData.password;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: userData,
        token,
    });
  } catch (error) {
    console.error("error", error.message)
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const logout = async (req, res) => {
  req.clearCookies();
  return res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
};


// fetch user id
export  const fetchUser = async(req,res) => {
  const { token} = req.cookies
  // console.log("Received token:", token); 
  if(!token){
    return res.status(401).json({
      message: "No token provided",
    })
  }

  try {
   const decoded = jwt.verify(token, process.env.SECRET_KEY)
    // console.log("Decoded:", decoded)
   
    const user = await UserModel.find(decoded.user).select("-password");
        // console.log("user:", user)

    req.user = user


    if(!user){
   return res.status(400).json({
      message: "User not found",
    })
    }

    return res.status(200).json({
      data: user
    })

    
  } catch (error) {
    console.log('Fetch-user error:', error)
        return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
    
  }






}