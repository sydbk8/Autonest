import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticateToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1]

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      console.log(err, 'error');
      console.log(res, 'result');
    });

    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error authenticating token:", error);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};