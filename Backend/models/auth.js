import mongoose from "mongoose";

const judgeSchema = mongoose.Schema({
  judge_id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
});

export default mongoose.model("Judges", judgeSchema);
