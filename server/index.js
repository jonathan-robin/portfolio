
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/send', (req,res) => {
   const output = 
  `<p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name : ${req.body.name}</li>
        <li>Email : ${req.body.email}</li>
      </ul>
      <h3>Message :</h3>
      <p>${req.body.message}</p>`

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "robin.jonathan.dev@gmail.com",
          pass: "************",
        },
        tls:{
          rejectUnauthorized: false
        }
      });
    
      // send mail with defined transport object
      let mailOptions = transporter.sendMail({
        from: "'NodeMailer Contact' <contact@jonathan-robin.com>", // sender address
        to: "robin.jonathan.dev@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
      });

       transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error); 
        }
        console.log("Message sent: %s", info.messageId); 
        console.log('Pereview URL : %s', nodemailer.getTestMessageUrl(info));
      })
})

app.listen(5000, () => {
  console.log("server started on port 5000");
});