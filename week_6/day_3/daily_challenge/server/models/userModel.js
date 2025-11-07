import { db } from '../config/db.js';

export const addUser = async (user, hashedPassword) => {
  return db.transaction(async trx => {
    const [userId] = await trx('users').insert(user);
    await trx('hashpwd').insert({
      username: user.username,
      password: hashedPassword
    });
    return userId;
  });
};

export const getAllUsers = () => db('users').select('*');

export const getUserById = id => db('users').where({ id }).first();

export const updateUser = (id, data) => db('users').where({ id }).update(data);

export const getPasswordByUsername = username =>
  db('hashpwd').where({ username }).first();
