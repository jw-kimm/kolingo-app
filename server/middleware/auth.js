const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token')

  //check for token
  if (!token)
    //permission denied (unauthorized)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // next();
    console.log(token);
    // //Add user from payload
    req.user = decoded;
    console.log(decoded)
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}

module.exports = auth;