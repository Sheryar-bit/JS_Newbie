const express = require('express');
const app = express();

const router = express.Router();

router.get('/', async function(req, res) {
    const allurls = await URL.find({});
    return res.render('signup', {
        urls: allurls,
    });
})

router.get('/signup', async function(req, res) {
    return res.render('signup')
})

router.get('/login', async function(req, res) {
    return res.render('login')
})

module.exports = router;