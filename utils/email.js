const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b01d873361976d",
      pass: "76011d201b9169",
    },
  });

  // 2) Define email options
  const mailOptions = {
    from: "Teddy and Theo <kuznetsov.dg495@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.text,
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
