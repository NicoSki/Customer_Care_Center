const sgMail = require('@sendgrid/mail');
let { mailer } = require('../config');

sgMail.setApiKey(mailer.sendgrid);

const sendMail = async (data, user) => {
    try {
        await sgMail.send(

            {
                to: `${data.email}`,
                from: 'nicoss2001@hotmail.com',
                subject: `E-mail Simulator by ${data.name}`,
                html: `
                    <div style="background-color: greenyellow; text-align: center;height: 5hv;color: rgb(27, 17, 17);">
                    <h1>Dear ${data.name}</h1>
                    <p>Thanks for trying this email simulator!</p>
                </div>
                <h2>Employer information:</h2>
            
                <ul>
                    <li>👩‍💻 ${user.name}</li>
                    <li>📩 ${user.email}</li>
                    <li>🎯 ${user.address.street} - ${user.address.city}(${user.address.zipcode})</li>
                    <li>📱 ${user.phone}</li>
                    <li>💻 ${user.website}</li>
                    <li>🏢 ${user.company.name}</li>
                </ul>
            
                <section style="text-align: center;">
                    <p>I hope this email finds you well. I wanted to take a moment to thank you for choosing our web application.We
                        are pleased to kwon that you have found the user you were looking for in our application</p>
                    <p>Our team works hard to provide our users with an optional user experience and it is rewarding to know that we
                        have met your expectations. If there is anything more we can do to improve your experience, please let do
                        not hesitate to contact us.</p>
                    <p>Once again, thank you for your time and trust in our application. We hope to continue being part of your life
                        and supporting you in everything you need.</p>
                    <p>sincerely,</p>
                </section>
            
            
                <div style="background-color: greenyellow; text-align: center;height: 5hv;color: rgb(27, 17, 17);">
                    <h2>NCS</h2>
                    <p>FULL STACK DEVELOPER</p>
                </div>
                    `
            }

        );
        console.log('Email sent successfuly');
    } catch (error) {
        console.log(error);
    }
}


exports.sendMail = (data, user) => sendMail(data, user);
