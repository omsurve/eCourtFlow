import express from "express";
import cases from "../models/cases.js";

export const addcases = async (req, res) => {
  try {
  const {
    Caseid,
    Section,
    Casetype,
    Casefilingdate,
    Firstparty,
    Secondparty,
    LawType,
    StartDate,
  } = req.body;
    //Comparing cases start date with current date and assigning the severity to them accordingly
    if(req.body.StartDate - new Date().getFullYear() <= 1){
      req.body.Severity = "normal";
      
    }
    else if(req.body.StartDate - new Date().getFullYear() <=3){
      req.body.Severity = "medium";

    }
    else {
      console.log(req.body);
      req.body.Severity = "high";
    }
    const newJudge = await cases.create({
      Caseid,
      Section,
      Casetype,
      Casefilingdate,
      Firstparty,
      Secondparty,
      LawType,
      StartDate,
      Severity: req.body.Severity
    });
    
    res.status(200).json(newJudge);
    
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//  message: error.message,