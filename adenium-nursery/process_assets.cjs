const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const rawDir = path.join(__dirname, 'src', 'assets', 'raw');
const processedDir = path.join(__dirname, 'src', 'assets', 'processed');

if (!fs.existsSync(rawDir)) fs.mkdirSync(rawDir, { recursive: true });
if (!fs.existsSync(processedDir)) fs.mkdirSync(processedDir, { recursive: true });

async function removeWhiteBackground(inputPath, outputPath) {
  try {
    const image = await Jimp.read(inputPath);
    
    // Iterate over every pixel
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      
      // Strict white background removal with anti-aliasing
      if (red > 235 && green > 235 && blue > 235) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel to 0 (transparent)
      } else if (red > 200 && green > 200 && blue > 200) {
        // Soft edge (alpha reduction based on whiteness)
        this.bitmap.data[idx + 3] = Math.max(0, 255 - ((red + green + blue) / 3));
      }
    });

    await image.write(outputPath);
    console.log(`Processed: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function run() {
  const files = fs.readdirSync(rawDir);
  console.log(`Found ${files.length} images to process.`);
  
  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg')) {
      const inputPath = path.join(rawDir, file);
      // Ensure output is always .png
      const outputName = file.split('.')[0] + '.png';
      const outputPath = path.join(processedDir, outputName);
      
      await removeWhiteBackground(inputPath, outputPath);
    }
  }
  console.log('All processing complete!');
}

run();
