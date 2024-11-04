import authType from "../models/auth.js";


export const clerks = async (req,res) => {
  try {
    const getallClerks = await authType.find({userType:"Clerk"});
    res.status(200).json(getallClerks);
  } catch (error) {
    res.status(400).json("invalid request");
  }
};