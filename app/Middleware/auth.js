const User = use('app/Models/User');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const user = await User.findOne({token});

    if (user == null) {
      throw 'Invalid user ID';
    } else {

      req.body.auth = user;
      next();
    }
  } catch {
    res.status(401).json({
      error: 'Invalid request'
    });
  }
};
