import { contactAdminTemplate, contactUserTemplate } from "../utils/emailTemplate.js";
import { sendEmail } from "../utils/sendEmail.js";

export const submitContactForm = async (req, res) => {
  try {
    const { fullName, contactNumber, email, comment } = req.body;

    if (!fullName || !contactNumber || !email || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: "New Contact Form Submission - Farm 93",
      message: contactAdminTemplate({ fullName, contactNumber, email, comment }),
    });

    await sendEmail({
      email,
      subject: "We received your message - Farm 93",
      message: contactUserTemplate({ fullName, comment }),
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in contact form:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
