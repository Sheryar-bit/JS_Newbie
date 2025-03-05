const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const restrictToLoginUserOnly = require('../Authentication/middleware')


const router = require('../Authentication/Router');
const userrouter = require('../Authentication/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
// app.use(express.static(path.resolve('/views')))
app.use(express.static(path.join(__dirname, 'views')))


app.use('/url', restrictToLoginUserOnly, router)
app.use('/user', userrouter)
app.use('/', router)

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})