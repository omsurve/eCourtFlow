import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import clerkRoutes from "./routes/clerk_auth.js";
import judgesroutes from "./routes/auth.js";
import casesroutes from "./routes/cases.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//connect to mongodb database
dotenv.config();

app.get("/", (req, res) => {
  res.send("This is backend of our website.");
});
app.use("/judges", judgesroutes);
app.use("/cases", casesroutes);
app.use("/clerk_auth", clerkRoutes);
const PORT = process.env.PORT || 5000;

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
