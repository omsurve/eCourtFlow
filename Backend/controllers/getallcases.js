
import cases from "../models/cases.js";

export const getallcases = async(req,res) => {
    const allcases = await cases.find();
    res.status(200).json(allcases);
}

