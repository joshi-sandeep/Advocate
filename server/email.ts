import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'onesmartcoderyt@gmail.com',
    pass: 'cxea tmhs skvm dliv' 
  }
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  debugger;
  console.log("data", data);
  // Prepare the email content in plain text
  const mailOptions = {
    from: 'onesmartcoderyt@gmail.com', // sender address
    to: 'onesmartcoderyt@gmail.com', // receiver address
    subject: `New Contact Form Submission from ${data.name}`, // Subject line
    text: `New Contact Form Submission:
    
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    
    Message:
    ${data.message}`
  };
console.log("in mail send 1", mailOptions)
  try {
    // Send the email
    debugger;
    console.log("in mail send", mailOptions);
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
