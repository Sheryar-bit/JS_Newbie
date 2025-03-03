const express = require('express');
const handleUserSignUp = require('../Authentication/userControler')
// const router = require('../Routes/PersonRoutes')
const router = express.Router()
const app = express();

router.post('/', handleUserSignUp)
router.post('/login', handleUserlogin)


module.exports = router;