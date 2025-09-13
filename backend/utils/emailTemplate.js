export function generateTrainingEmailTemplate(data) {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #2c3e50;">New Training Registration</h2>
      <p style="color: #555;">A new participant has submitted the training registration form.</p>
    </div>

    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Contact Number:</strong> ${data.contactNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
    </div>

    <div style="text-align: center; margin-top: 20px; color: #777;">
      <p>This is an automated notification from <strong>Farm 93</strong>.</p>
    </div>
  </div>
  `;
}
export const contactAdminTemplate = ({ fullName, contactNumber, email, comment }) => {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Contact Number:</strong> ${contactNumber}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Comment:</strong> ${comment}</p>
  `;
};

export const contactUserTemplate = ({ fullName, comment }) => {
  return `
    <p>Hi ${fullName},</p>
    <p>Thanks for reaching out to <strong>Farm93</strong>. We’ve received your message and will get back to you soon.</p>
    <br/>
    <p><strong>Your Message:</strong></p>
    <blockquote>${comment}</blockquote>
    <br/>
    <p>Best regards,<br/>Farm93 Team</p>
  `;
};

