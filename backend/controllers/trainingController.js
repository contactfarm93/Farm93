import { Training } from "../models/trainingModel.js";
import { generateTrainingEmailTemplate } from "../utils/emailTemplate.js";
import { sendEmail } from "../utils/sendEmail.js";

export const submitTrainingForm = async (req, res) => {
  try {
    const { fullName, email, contactNumber, gender, address, experienceLevel } = req.body;

    if (!fullName || !email || !contactNumber || !gender || !address || !experienceLevel) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }
    await Training.create(req.body);
    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: "New Training Form Submission - Farm 93",
      message: generateTrainingEmailTemplate(req.body),
    });
    await sendEmail({
      email,
      subject: "Training Registration Confirmation - Farm 93",
      message: `
        <p>Hi ${fullName},</p>
        <p>Thanks for registering for training at <strong>Farm 93</strong>. We’ll contact you soon.</p>
      `,
    });

    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
