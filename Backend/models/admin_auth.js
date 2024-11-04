import mongoose from "mongoose";

const adminAuth = mongoose.Schema({
  admin_id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  judges_added: { type: [String], required: true },
});

export default mongoose.model("admin", adminAuth);
