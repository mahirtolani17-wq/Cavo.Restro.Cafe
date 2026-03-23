import fs from 'fs';
import path from 'path';

const fileIds = [
  '16fkHLVrslN56BSy8fdy9QgEOe4GPbgrP',
  '1QBFa19aHvgEyH2JS4ORtjoZhaaEnbX5P',
  '1SaVdaihuRVIQfTR2kWjX8jcT8dMEqQgs',
  '1Uvixtd-2xGAliZV-HfoALCWorXClRc9V',
  '1w3lWlHfQntiRsyseaiXf0TKLUa0Y7F5J',
  '1wh3t1ymMnkZ9Spx-yhMrMLjKWxJJHIem'
];

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function downloadImages() {
  for (let i = 0; i < fileIds.length; i++) {
    const id = fileIds[i];
    const url = `https://drive.google.com/uc?export=download&id=${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const buffer = await response.arrayBuffer();
      const filename = `new_img_${i + 1}.jpg`;
      fs.writeFileSync(path.join(dir, filename), Buffer.from(buffer));
      console.log(`Downloaded ${filename}`);
    } catch (e) {
      console.error(`Failed to download ${id}:`, e);
    }
  }
}

downloadImages();
