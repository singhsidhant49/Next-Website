import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'singhsidhant338@gmail.com',
    pass: 'fyivkohjcjesjwct',
  },
});

export default async function handler(req, res) {
  const { name, email, message, phone, subject } = req.body;

  try {
    await transporter.sendMail({
      from: 'singhsidhant338@gmail.com',
      to: 'info@sheroincorp.com',
      subject: `New message from ${name}`,
      text: `${message} ${phone} ${email} ${subject}`,
    });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
}
