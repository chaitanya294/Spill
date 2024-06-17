var jwt = require("jsonwebtoken");
require("dotenv").config();

async function middleware(req, res, next) {
    const jwt_token = req.body.token;
    if(jwt_token){
        const decoded = await jwt.verify(jwt_token, process.env.SECRET_KEY);
    if(decoded._id){
        req.headers._id = decoded._id;
    }
    else{
        req.headers._id = 1;
    }
    next();
    }
    
}

module.exports = middleware;