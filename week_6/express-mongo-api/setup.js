import fs from 'fs';
import path from 'path';

const folders = [
  'src/databases',
  'src/middlewares',
  'src/routes',
  'src/routes/project',
  'src/routes/auth',
  'src/modules/auth/model',
  'src/modules/auth/services',
  'src/modules/project/model',
  'src/modules/project/services',
];

const files = [
  'src/main.js',
  'src/databases/connect-mongo.js',
  'src/middlewares/auth.js',
  'src/middlewares/roles.js',
  'src/routes/index.js',
  'src/routes/project/index.js',
  'src/routes/auth/index.js',
  'src/modules/auth/model/index.js',
  'src/modules/auth/services/index.js',
  'src/modules/auth/index.js',
  'src/modules/project/model/index.js',
  'src/modules/project/services/index.js',
  'src/modules/project/index.js',
  '.env'
];

// Create folders
for (const dir of folders) fs.mkdirSync(dir, { recursive: true });

// Create files
for (const file of files) {
  if (!fs.existsSync(file)) fs.writeFileSync(file, '');
}

console.log('✅ Structure du projet créée avec succès !');
