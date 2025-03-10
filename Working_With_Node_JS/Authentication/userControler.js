const {v4: uuidv4} = require('uuid');
const User = require('../Authentication/user')
const sessionId = require('../Authentication/auth')

async function handleUserSignUp(req, res) {
    try {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.render('/')
}catch(error) {
    console.log("ERROR!" ,error);
}
}

async function handleUserlogin(req, res) {
    const {email, password } = req.body;
    const user = await User.findOne({email});
    if (!user) 
        return res.render('signup', {
        error: "Invalid Credentials! "
        });
        
        //making a session Id/coockie
        // const sessionId = uuidv4();
       const token = setUser(sessionId, user);
        res.cookie('uid', token)
        return res.redirect('/')
}

module.exports = {
    handleUserSignUp, 
    handleUserlogin
};