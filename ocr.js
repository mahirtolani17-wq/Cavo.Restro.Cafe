import { createWorker } from 'tesseract.js';
import fs from 'fs';

const fileIds = [
  '11CwNeir6H5d9_I_83vXj09bG2UItJO8k',
  '1Dtx2qxKRKu-1vEYR_Reu0aCv9A-3SMbb',
  '1HF7kgR6NHiFsYHSgo_nzJRVN4vtRJ81n',
  '1mWXV-Fx-UyqXmhTIH9Kf5wmQ8UjIM-jn',
  '1tSy6C9bE7tatubo1bNX_ZRDVnP1O1FQJ'
];

async function run() {
  const worker = await createWorker('eng');
  let resultText = '';

  for (let i = 0; i < fileIds.length; i++) {
    const id = fileIds[i];
    console.log(`Processing image ${i + 1}...`);
    const url = `https://drive.google.com/uc?export=download&id=${id}`;
    
    try {
      const res = await fetch(url);
      const buffer = await res.arrayBuffer();
      const { data: { text } } = await worker.recognize(Buffer.from(buffer));
      resultText += `\n--- PAGE ${i + 1} ---\n` + text;
      console.log(`Page ${i + 1} done.`);
    } catch (e) {
      console.error(`Error on page ${i + 1}:`, e);
    }
  }

  await worker.terminate();
  fs.writeFileSync('ocr_result.txt', resultText);
  console.log('OCR complete. Check ocr_result.txt');
}

run();
