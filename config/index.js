require('dotenv').config();

let config = {
    port: process.env.PORT || 8080
}

let mailer = {
    sendgrid: process.env.SEND_GRID
}

module.exports = { config, mailer }