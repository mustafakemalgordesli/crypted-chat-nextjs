var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const generateAccessToken = (user) => {
    return JWT.sign(
        {
            ...user,
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
            expiresIn: "30d",
        }
    );
};

const generateRefreshToken = (user) => {
    return JWT.sign(
        { ...user },
        process.env.REFRESH_TOKEN_SECRET_KEY,
        {
            expiresIn: "52w",
        }
    );
};

const encryptText = (text) => {
    return AES.encrypt(text, process.env.ENCRYPT_KEY).toString();
};

const decryptText = (text) => {
    var bytes = AES.decrypt(text, process.env.ENCRYPT_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    encryptText,
    decryptText,
};