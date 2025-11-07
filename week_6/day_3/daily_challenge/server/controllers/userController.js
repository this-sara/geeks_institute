import bcrypt from 'bcryptjs';
import { addUser, getAllUsers, getUserById, updateUser, getPasswordByUsername } from '../models/userModel.js';

export const register = async (req, res) => {
  try {
    const { username, password, email, first_name, last_name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await addUser({ username, email, first_name, last_name }, hashedPassword);
    res.json({ success: true, userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getPasswordByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    res.json({ success: true, username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

export const updateUserInfo = async (req, res) => {
  await updateUser(req.params.id, req.body);
  res.json({ success: true });
};
