const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.status(401).json({ message: "Token not provider!"});
    }

    const [, token] =  auth.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
        
        req.userId = decoded.id;

        return next();
    } catch(err) {
        return res.status(401).json({ message: "Token is invalid!"});
    }
}