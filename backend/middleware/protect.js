import jwt from "jsonwebtoken"

export const protect = async(req,res,next) => {

  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer')){
       return res.status(401).json({ message: "No token provided or bad format" });
  }

const token = authHeader.split(" ")[1]
  // console.log("token:", token)
  if(!token) {
    return res.status(401).json({ message:'invalid token'})
  }

  try {

    const decoded =  jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded

    next()
    
  } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token" });
  }

}

// export const protect = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

