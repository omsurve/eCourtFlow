import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import judges from "../models/auth.js";

export const signup = async (req, res) => {
  const { judge_id, name, email, password } = req.body;
  try {
    const existinguser = await judges.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "Clerk already exists..." });
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const newJudge = await judges.create({
      judge_id,
      name,
      email,
      password: hashedpassword,
      userType: req.body.userType,
    });
    const token = jwt.sign(
      { email: newJudge.email, id: newJudge.judge_id },
      "test",
      {
        expiresin: "1h",
      }
    );
    res.status(200).json({ result: newJudge, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export const login = async (req, res) => {
  
  const { judge_id, password } = req.body;
  try {
    const existinguser = await judges.findOne({ judge_id });
    if (!existinguser) {
      return res.status(404).json({ message: "Clerk not found ..." });
    }
    const isPasswordcrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordcrt) {
      return res.status(400).json({ message: "Inavlid credentials..." });
    }

    const token = jwt.sign(
      { email: judges.email, id: existinguser.judge_id },
      "test",
      { expiresIn: "3h" }
    );
    res.status(200).json({ result: judges, token });
  } catch (error) {
    res.status(500).json({message:"Something went wrong"});
  }
};
