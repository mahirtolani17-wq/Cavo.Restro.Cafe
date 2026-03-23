import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/https:\/\/img\.sanishtech\.com\/u\//g, '/images/');
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const files = [
  'src/pages/About.tsx',
  'src/pages/Locations.tsx',
  'src/pages/Home.tsx',
  'src/pages/Events.tsx'
];

files.forEach(f => replaceInFile(path.join(process.cwd(), f)));
