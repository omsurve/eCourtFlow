import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const casesSchema = mongoose.Schema({
  Caseid: { type: "Number", required: true, unique: true },
  Section: { type: "String", required: true },
  Casetype: { type: "String", required: true },
  Casefilingdate: { type: "String", required: true },
  Firstparty: { type: "String", required: true },
  Secondparty: { type: "String", required: true },
  Severity: { type: "String", required: true, default: "Normal" },
  Judgeallocated: { type: "String" },
  LawType: { type: "String", required: true },
});

casesSchema.plugin(mongoosePaginate)
export default mongoose.model("cases", casesSchema);
