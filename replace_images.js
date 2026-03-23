import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');

const oldFiles = [
  '80ba7bf91e2c93bb9a400ce308759033.jpg',
  '1297fe39d4d78619c7901d0f700c901d.jpg',
  '78180a04eb3d0117a0aaeb09df0d846d.jpg',
  'ec29c594a71482d7970ac6322dee525b.jpg',
  '7143ee4f46a0788e7f2a8bfceaea1d66.jpg',
  '2f7932f383a2a8d57538f94e7106feec.jpg'
];

for (let i = 0; i < 6; i++) {
  const newFile = `new_img_${i + 1}.jpg`;
  const oldFile = oldFiles[i];
  
  fs.copyFileSync(path.join(dir, newFile), path.join(dir, oldFile));
  console.log(`Replaced ${oldFile} with ${newFile}`);
}
