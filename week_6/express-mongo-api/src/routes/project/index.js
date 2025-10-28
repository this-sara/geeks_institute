import express from 'express';
import { auth } from '#@/middlewares/auth.js';
import { isAdmin } from '#@/middlewares/roles.js';
import * as projectService from '#@/modules/project/services/index.js';

const router = express.Router();

// GET all projects
router.get('/', auth, async (req, res) => {
  const projects = await projectService.getAll();
  res.json(projects);
});

// POST create project (admin only)
router.post('/', auth, isAdmin, async (req, res) => {
  const project = await projectService.create(req.body);
  res.status(201).json(project);
});

// GET one project
router.get('/:id', auth, async (req, res) => {
  const project = await projectService.getById(req.params.id);
  res.json(project);
});

// PUT update project (admin only)
router.put('/:id', auth, isAdmin, async (req, res) => {
  const project = await projectService.update(req.params.id, req.body);
  res.json(project);
});

// DELETE project (admin only)
router.delete('/:id', auth, isAdmin, async (req, res) => {
  await projectService.deleteById(req.params.id);
  res.status(204).send();
});

export default router;
