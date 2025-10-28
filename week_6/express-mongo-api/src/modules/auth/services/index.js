import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../model/index.js';
import dotenv from 'dotenv';
dotenv.config();

export async function register(email, password, role = 'member') {
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed, role });
  return user;
}

export async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid password');

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { token, user };
}
