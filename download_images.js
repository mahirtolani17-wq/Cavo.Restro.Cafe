import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = [
  'https://img.sanishtech.com/u/1297fe39d4d78619c7901d0f700c901d.jpg',
  'https://img.sanishtech.com/u/80ba7bf91e2c93bb9a400ce308759033.jpg',
  'https://img.sanishtech.com/u/78180a04eb3d0117a0aaeb09df0d846d.jpg',
  'https://img.sanishtech.com/u/ec29c594a71482d7970ac6322dee525b.jpg',
  'https://img.sanishtech.com/u/7143ee4f46a0788e7f2a8bfceaea1d66.jpg',
  'https://img.sanishtech.com/u/2f7932f383a2a8d57538f94e7106feec.jpg'
];

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

urls.forEach(url => {
  const filename = url.split('/').pop();
  const filepath = path.join(dir, filename);
  const file = fs.createWriteStream(filepath);
  
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
});
