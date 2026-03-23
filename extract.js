import fs from 'fs';

const fileIds = [
  '11CwNeir6H5d9_I_83vXj09bG2UItJO8k',
  '1Dtx2qxKRKu-1vEYR_Reu0aCv9A-3SMbb',
  '1HF7kgR6NHiFsYHSgo_nzJRVN4vtRJ81n',
  '1mWXV-Fx-UyqXmhTIH9Kf5wmQ8UjIM-jn',
  '1tSy6C9bE7tatubo1bNX_ZRDVnP1O1FQJ'
];

async function run() {
  try {
    const parts = [];
    for (const id of fileIds) {
      const url = `https://drive.google.com/uc?export=download&id=${id}`;
      const res = await fetch(url);
      const buffer = await res.arrayBuffer();
      parts.push({
        inlineData: {
          data: Buffer.from(buffer).toString('base64'),
          mimeType: 'image/jpeg'
        }
      });
    }

    parts.push({ text: "Extract all the menu items from these images. Group them by category exactly as shown in the images (e.g., Starters, Main Course, Beverages, etc.). Return ONLY a valid JSON object with the following structure: { \"Category Name\": [ { \"name\": \"Item Name\", \"desc\": \"Item description\", \"price\": \"Item price\" } ] }" });

    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0].content.parts[0].text) {
        fs.writeFileSync('extracted_menu.json', data.candidates[0].content.parts[0].text);
        console.log("Done");
    } else {
        console.error("Failed to extract:", JSON.stringify(data, null, 2));
    }
  } catch (e) {
    console.error(e);
  }
}
run();
