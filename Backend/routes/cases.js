import express from "express";
import { getallcases } from "../controllers/getallcases.js";
import { updateCases } from "../controllers/updatecases.js";
import { sortcases, searchById } from "../controllers/sortcases.js";
import { addcases } from "../controllers/addcases.js";
import { getAllCases } from "../controllers/getallcases.js";

const  router = express.Router();


router.get("/getallcases", getallcases); 
router.patch("/updateCases", updateCases);
router.get("/sort", sortcases);
router.post("/addcases", addcases);
router.get("/searchbyId", searchById);

export default router;
