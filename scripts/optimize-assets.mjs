import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function getFiles(dir) {
  const subdirs = await fs.readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await fs.stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

async function optimize() {
  const publicDir = path.resolve('public');
  const allFiles = await getFiles(publicDir);
  
  const targetExtensions = ['.jpg', '.jpeg', '.png'];
  const images = allFiles.filter(f => targetExtensions.includes(path.extname(f).toLowerCase()));

  console.log(`Found ${images.length} images to optimize.`);

  for (const file of images) {
    const ext = path.extname(file).toLowerCase();
    const fileName = path.basename(file);
    const dirName = path.dirname(file);
    const dest = path.join(dirName, `${path.basename(file, ext)}.webp`);

    let quality = 65;
    let maxWidth = 1200;

    // Smart categorization
    if (file.toLowerCase().includes('hero')) {
      quality = 75;
      maxWidth = 1920;
    } else if (file.toLowerCase().includes('blog')) {
      quality = 70;
      maxWidth = 1200;
    } else if (file.toLowerCase().includes('hotel') || file.toLowerCase().includes('logo')) {
      quality = 55;
      maxWidth = 640;
    } else if (file.toLowerCase().includes('testimonials')) {
      quality = 60;
      maxWidth = 800;
    }

    try {
      const pipeline = sharp(file);
      const metadata = await pipeline.metadata();

      let finalPipeline = pipeline
        .webp({ quality, effort: 6, lossy: true, alphaQuality: 80 })
        .rotate(); // Preserve orientation

      if (metadata.width > maxWidth) {
        finalPipeline = finalPipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }

      await finalPipeline.toFile(dest);
      
      // Verification: ensure dest exists and has size
      const stats = await fs.stat(dest);
      if (stats.size > 0) {
        await fs.unlink(file);
        console.log(`Optimized: ${path.relative(publicDir, file)} -> ${path.relative(publicDir, dest)} (${Math.round((stats.size / (await fs.stat(file).catch(() => ({size: 0}))).size || 1) * 100)}%)`);
      }
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err.message);
    }
  }

  console.log('Optimization complete.');
}

optimize().catch(console.error);
