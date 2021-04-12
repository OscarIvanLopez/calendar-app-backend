const { response } = require("express");

const jwtValidator = (req, res = response, next) => {
    // x-token-headers
    const token = req.headers('x-token');

    console.log(token);

    next();
};

module.exports = jwtValidator;
