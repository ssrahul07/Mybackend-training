const jwt = require("jsonwebtoken");
function validateToken(req, res, next) {
       let token = req.header["x-auth-token"];
       if (!token)
              token = req.header["x-auth-token"];
       //if no token present in the request header return erroe
       if (!token)
              return res.send({ status: false, msg: "token must be present" });
       console.log(token);
       // If a token is present then decode the token with verify function
       // verify takes two inputs:
       // Input 1 is the token to be decoded
       // Input 2 is the same secret with which the token was generated
       // Check the value of the decoded token yourself
       let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
       if (!decodedToken) {
              return res.send({ status: false, msg: "token is invalid" });
       }
       next();
}

module.exports.validateToken = validateToken
