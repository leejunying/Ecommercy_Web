const TokenUtil = require("../Utils/token");

const checkToken = async (req, res, next) => {
  try { 


    const token =
    req.headers.authorization
    
    if (!token) {
      res.sendStatus(403);
    }
    const verifyToken = await TokenUtil.verifyToken(token);

    if (!verifyToken) {
      res.send(false);
    } else {
      delete verifyToken.password;
     
      req.data = [{ ...verifyToken }];
    }

    return next();
  } catch (error) {
    res.send(false);
  }
};

module.exports = {
  checkToken,
};
