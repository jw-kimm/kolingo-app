const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token')

  // //check for token
  if (!token)
    //permission denied (unauthorized)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // //verify token
    const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET);
    next();
    // //Add user from payload
    req.user = decoded;
  } catch (err) {
    res.status(401).json({
      message: "Auth failed"
    })
  }
}

module.exports = auth;