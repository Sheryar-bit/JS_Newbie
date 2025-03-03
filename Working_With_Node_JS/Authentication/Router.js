const express = require('express');
const app = express();

const router = express.Router();

router.get('/signup', async function(req, res) {
    return res.render('signup')
})

router.get('/login', async function(req, res) {
    return res.render('login')
})