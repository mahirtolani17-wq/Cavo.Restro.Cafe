import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');
for (let i = 1; i <= 6; i++) {
  const file = path.join(dir, `new_img_${i}.jpg`);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  }
}
