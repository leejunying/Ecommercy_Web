const jwt = require("jsonwebtoken");
const jwtConfig = require("../Configs/token.js")

const generateToken = async (user) => {
    
  return await jwt.sign(
    {
      _id: user._id,
      Email:user.Email,
      Lastname: user.Lastname,
      Firstname: user.Firstname,
      Level:user.Level,
      History:user.History,
      Lovelist:user.Lovelist,
      
    },
    jwtConfig.secretKey,
  
    {
      subject: user._id.toString(),
      expiresIn: "365d",
    }
  );
};

const verifyToken = async (token) => {

   console.log(jwtConfig.secreKey)
  return await jwt.verify(token, jwtConfig.secretKey);
};

module.exports = {
  generateToken,
  verifyToken,
};
