import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(dir).filter(f => f.startsWith('new_img_'));
files.forEach(f => {
  const stats = fs.statSync(path.join(dir, f));
  console.log(`${f}: ${stats.size} bytes`);
});
