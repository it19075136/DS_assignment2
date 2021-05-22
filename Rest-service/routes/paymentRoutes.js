const router = require('express').Router();
let Payment = require('../models/paymentModel');
var nodemailer = require('nodemailer');


//add payment

router.post("/add", (req,res) => {
    const newPayment = new Payment(req.body);
    console.log('newPayment: ', newPayment);

    newPayment.save().then(() => res.json("Payment Added!"));

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