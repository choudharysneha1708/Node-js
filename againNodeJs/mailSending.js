const { text } = require('express');
var nodeMailer = require('nodemailer')
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS: true,
    auth:{
        user:'choudharysneha1708@gmail.com',
        pass:'***'
    }
});
var mailOptions={
    from: "choudharysneha1708@gmail.com",
    to: "choudharysneha1708@gmail.com",
    subject: "Hello Mail",
    text: "Hello Sneha!"
}
transport.sendMail(mailOptions, function(error, info){
    if(error){
      console.warn(error);
    }else{
        console.warn("email has been sent", info.response);
    }
})