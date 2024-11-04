// import cases from "../models/cases.js";
// import { Mongoose } from "mongoose";
// const mongoose = Mongoose.mongoose;
// export const sortcases = async (req, res) => {
//   try{
//   let  severity  = req.body.severity;   
//   console.log(severity);
//   const sortcases = await cases.find({ Severity: severity });
//   if(sortcases.length === 0) { 
//     //if no cases found other than the given severity then return all cases
//       const otherCases=await cases.find({});
//       return res.status(200).json(otherCases);
//     };
//   return res.status(200).json(sortcases);
// }
// catch(error){
  
//   return res.status(404).json({message: error.message})
// }
// };

import cases from "../models/cases.js";
import { Mongoose } from "mongoose";
const mongoose = Mongoose.mongoose;

export const sortcases = async (req, res) => {
  try {
    let severity = req.query.Severity
  
    let page = req.query.page || 1;
    let pageSize = req.query.pageSize || 5; // You can adjust the default page size

    console.log(severity);

    const options = {
      page: parseInt(page),
      limit: parseInt(pageSize),
    };

    let query = { Severity: severity };

    if (!severity) {
      query = {}; // If no severity specified, retrieve all cases
    }

    const sortcases = await cases.paginate(query, options);

    if (sortcases.docs.length == 0) {
      // If no cases found for the given severity or all cases, return all cases
      const otherCases = await cases.paginate({}, options);
      console.log()
      return res.status(200).json(otherCases);
    }
    console.log('Return only high priority cases ')
    return res.status(200).json(sortcases);
  
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};


export const searchById = async (req, res) => {
  const { Caseid } = req.body;
  const searchByCaseId = await cases.find({ Caseid: Caseid });
  res.status(200).json(searchByCaseId);
};




