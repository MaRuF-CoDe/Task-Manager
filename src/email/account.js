const sgMail = require('@sendgrid/mail')
// SENDGRID_API_KEY=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
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'bangabashi@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}


module.exports = {
    sendWelcomeMail,
    sendCancelationEmail
}