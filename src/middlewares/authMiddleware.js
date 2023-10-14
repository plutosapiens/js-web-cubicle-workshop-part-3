const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');
const { decode } = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];
    console.log({token})

    if(token){
        try {
            const decodedToken = await jwt.verify(token, SECRET)
            req.user = decodedToken;
            next();
        } catch (error) {
            console.log({ error });
            res.clearCookie('auth');
            res.redirect('/users/login');
        }
    }
    else{
        next();
    }

};