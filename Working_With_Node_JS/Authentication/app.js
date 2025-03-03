const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const restrictToLoginUserOnly = require('../Authentication/middleware')

const staticroutes = require('../Authentication/Router')
const userRoute = require('../Authentication/user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/url', restrictToLoginUserOnly, staticroutes)
app.use('/user', userRoute)
app.use('/', staticroutes)

const PORT = 8000;
app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
})