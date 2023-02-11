const express = require('express');
const routes = express.Router();
const { allUser, getUser, sendEmail } = require('../controller');

routes.get('/', allUser);
routes.get('/:id', getUser);
routes.post('/:id', sendEmail);


module.exports = routes;