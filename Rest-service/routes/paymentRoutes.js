const router = require('express').Router();
let Payment = require('../models/paymentModel');
var nodemailer = require('nodemailer');
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "be899791",
  apiSecret: "9IjSZjdwGGsrW760"
})


//add payment

router.post("/add", (req,res) => {
    const newPayment = new Payment(req.body);
    console.log('newPayment: ', newPayment);

    newPayment.save().then(() => res.json("Payment Added!"));

    const from = "Vonage APIs";
    const to = "94776486255";
    const text = "A text message sent using the Vonage SMS API";

    vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    });

        const email = req.body.userMail;
        const subject = 'Payment Verfication';
        const body = 'Payment Body'

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'tweb4172@gmail.com',
              pass: '#sliit1234'
            }
          });
          
          var mailOptions = {
            from: 'tweb4172@gmail.com',
            to: email ,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

});



//SendConfirmationDetails (Email)


module.exports = router;