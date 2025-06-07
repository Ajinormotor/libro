
import jwt from "jsonwebtoken"



export const generateToken = (res, user) => {

  const token = jwt.sign({ user }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 36 * 60 * 60 * 1000, 
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return token;
};
