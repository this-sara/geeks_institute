import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '#@/modules/auth/model/index.js';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGO_URL || !JWT_SECRET) {
  console.error('Missing MONGO_URL or JWT_SECRET in .env');
  process.exit(1);
}

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log('Connected to MongoDB');

  const email = process.env.ADMIN_EMAIL || 'admin@example.com';
  const plainPassword = process.env.ADMIN_PASSWORD || 'Admin123!';

  const hashed = await bcrypt.hash(plainPassword, 10);

  let user = await User.findOne({ email });
  if (user) {
    user.password = hashed;
    user.role = 'admin';
    await user.save();
    console.log(`Updated existing user ${email} to role admin`);
  } else {
    user = await User.create({ email, password: hashed, role: 'admin' });
    console.log(`Created admin user ${email}`);
  }

  const token = jwt.sign({ id: user._id.toString(), role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  console.log('\n=== Admin token (use this in Authorization header) ===');
  console.log(token);
  console.log('\nEmail:', email);
  console.log('Password:', plainPassword);

  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
