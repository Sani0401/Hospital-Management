const jwt = require( "jsonwebtoken");

const generateToken = (data) => {
    const secretKey = process.env.secretKey;
const {firstName,lastName,email,password,contactNumber, location} = data
    const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password : password,
        contactNumber :contactNumber,
        location : location
    }

    const options ={
        expiresIn: '7d',
    }

    const token = jwt.sign(payload, secretKey, options);

    return token;
}

module.exports = generateToken;