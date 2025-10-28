import express from 'express';
import * as authService from '#@/modules/auth/services/index.js';
import authRoutes from '#@/routes/auth/index.js';
import projectRoutes from '#@/routes/project/index.js';

const router = express.Router();
router.use('/project', projectRoutes);
router.use('/auth', authRoutes);
router.post('/register', async (req, res) => {
  try {
    const user = await authService.register(req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const data = await authService.login(req.body.email, req.body.password);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;


