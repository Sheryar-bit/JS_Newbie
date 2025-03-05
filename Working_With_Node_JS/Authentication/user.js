const express = require('express');
const { handleUserSignUp, handleUserlogin } = require('../Authentication/userControler');
// const router = require('../Routes/PersonRoutes')
const userrouter = express.Router()
const app = express();

userrouter.post('/', handleUserSignUp)
userrouter.post('/login',handleUserlogin)


module.exports = userrouter;