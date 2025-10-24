// read-file.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Required to use __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readFile() {
    const filePath = path.join(__dirname, 'files', 'file-data.txt');
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
}
