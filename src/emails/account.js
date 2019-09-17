
const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cormaclevins@outlook.ie',
    subject: 'Welcome To The App',
    text: `Welcome to the app ${name}.`
  })
}


const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cormaclevins@outlook.ie',
    subject: 'Goodbye',
    text: `Goodbye from the app ${name}.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail
}
