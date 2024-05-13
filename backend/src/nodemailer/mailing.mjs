//importing modules
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

//function to send email to the user
export const sendingMail = async({from, to, subject, text}) =>{

  try {
    let mailOptions = ({
      from,
      to,
      subject,
      text
  })
  //o'zgaruvchiga nodemailerda createTransport usulini belgilang
   //xizmat: qaysi elektron pochta platformasidan foydalanishni aniqlash
   //auth .env da saqlanadigan jo'natuvchining elektron pochta va parolini o'z ichiga oladi
  const Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.emailpassword,
      },
    });

      //return the Transporter variable which has the sendMail method to send the mail
      //which is within the mailOptions
    return await Transporter.sendMail(mailOptions) 
  } catch (error) {
    console.log(error)
  }
    
}
