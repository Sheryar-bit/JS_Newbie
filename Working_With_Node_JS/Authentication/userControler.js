const User = require('../Authentication/user')


async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.render('/')
}

async function handleUserlogin(req, res) {
    const {email, password } = req.body;
    const user = await User.findOne({email});
    if (!user) 
        return res.render('signup', {
        error: "Invalid Credentials! "
        });
    return res.redirect('/')
}

module.exports = {
    handleUserSignUp, 
    handleUserlogin
};