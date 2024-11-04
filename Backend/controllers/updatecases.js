import moment from "moment";
import cases from "../models/cases.js";

export const updateCases = async (req, res) => {
  const { Caseid } = req.body;
  // const caseid = parseInt(Caseid, 10);
  try {
    const caseRecord = await cases.findOne({ Caseid: Caseid });

    if (!caseRecord) {
      return res.status(404).json({ error: "Case not found." });
    }

    if (caseRecord.LawType === "Civil" || caseRecord.LawType === "Criminal") {
      const yearsDifference = yearsFromGivenDate(caseRecord.Casefilingdate);

      let severity;
      if (yearsDifference > 4) {
        severity = "Very High";
      } else if (yearsDifference >= 2 && yearsDifference <= 4) {
        severity = "Medium";
      } else {
        severity = "Normal";
      }

      await cases.updateOne(
        { Caseid },
        { $set: { Severity: severity } },
        { upsert: true, returnOriginal: false }
      );
      res.status(200).json({ message: "Severity updated successfully." });
    }
    function yearsFromGivenDate(dateString) {
      const givenDate = moment(dateString);
      const currentDate = moment();
      const years = currentDate.diff(givenDate, "years");
      return years;
    }

    // casesList.Severity = "Normal";
    // cases.sort((a, b) => {
    //   const severityA = a.Severity || ""; // If Severity is undefined, consider it an empty string
    //   const severityB = b.Severity || ""; // If Severity is undefined, consider it an empty string

    //   // Sort in a way that "Very High" Severity comes first
    //   if (severityA === "Very High" && severityB !== "Very High") {
    //     return -1; // a comes before b
    //   } else if (severityB === "Very High" && severityA !== "Very High") {
    //     return 1; // b comes before a
    //   } else {
    //     return 0; // Leave the order unchanged
    //   }
    // });
    // res.status(200).json(cases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
};
