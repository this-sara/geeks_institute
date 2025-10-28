import { Project } from '../model/index.js';

export async function createProject(data, userId) {
  return await Project.create({ ...data, owner: userId });
}

export async function getProjects(user) {
  if (user.role === 'admin') return Project.find();
  return Project.find({ owner: user.id });
}

export async function getProjectById(id, user) {
  const project = await Project.findById(id);
  if (!project) throw new Error('Project not found');
  if (user.role !== 'admin' && project.owner.toString() !== user.id)
    throw new Error('Access denied');
  return project;
}

export async function updateProject(id, data, user) {
  const project = await getProjectById(id, user);
  Object.assign(project, data);
  return project.save();
}

export async function deleteProject(id, user) {
  const project = await getProjectById(id, user);
  return project.deleteOne();
}
