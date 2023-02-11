const fetch = require('node-fetch');
const email = require('../utils/nodemailer');


const getApiData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // console.log(response);

        if (response.status === 200) {
            const data = await response.json()
            // console.log(data);
            return data
        }

        if (response.status === 401) {
            console.log('Wrong URL');
        }

        if (response.status === 404) {
            console.log('No Usar Found');
        }

    } catch (error) {
        console.log(error);
    }
}

const getUserData = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        // console.log(response);

        if (response.status === 200) {
            const data = await response.json()
            // console.log(data);
            return data
        }

        if (response.status === 401) {
            console.log('Wrong URL');
        }

        if (response.status === 404) {
            console.log('No User Found');
        }

    } catch (error) {
        console.log(error);
    }
}

async function allUser(req, res) {
    try {
        const users = await getApiData();
        res.render('index.ejs', { users });
    } catch (error) {
        console.log(error);
    }
}

async function getUser(req, res) {
    try {
        let id = req.params.id;
        const user = await getUserData(id);
        res.render('clipboard.ejs', { user });
    } catch (error) {
        console.log(error);
    }
}

async function sendEmail(req, res) {
    try {
        let data = req.body;
        let id = req.params.id;
        const user = await getUserData(id);     
        await email.sendMail(data,user);
        res.render('success.ejs', { data })
    } catch (error) {
        console.log(error);
    }
}


module.exports = { allUser, getUser, sendEmail }