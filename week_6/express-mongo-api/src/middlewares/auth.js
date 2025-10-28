import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch {
    res.status(400).json({ error: 'Invalid token' });
  }
}
