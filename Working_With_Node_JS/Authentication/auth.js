// const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()

function setUser(user) {
    // sessionIdToUserMap.set(id, user);
    return jwt.sign(
        user.id,
        user.email, 
        process.env.SECRET_KEY
    )};

function getUser(token) {
    // return sessionIdToUserMap.get(id);
    if(!token) return null;
    return jwt.verify(token, SECRET_KEY)
}

module.exports = {
    setUser,
    getUser
}