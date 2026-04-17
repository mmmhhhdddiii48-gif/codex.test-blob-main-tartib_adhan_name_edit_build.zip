import { access, readdir, stat } from 'node:fs/promises';

const requiredFiles = [
  'index.html',
  'app.js',
  'styles.css',
  'data-quran.js',
  'data-mafatih.js',
];

const requiredDirs = ['assets'];
const missing = [];

for (const file of requiredFiles) {
  try {
    await access(file);
    const fileStat = await stat(file);
    if (!fileStat.isFile() || fileStat.size === 0) {
      missing.push(`${file} (must be a non-empty file)`);
    }
  } catch {
    missing.push(file);
  }
}

for (const dir of requiredDirs) {
  try {
    await access(dir);
    const dirStat = await stat(dir);
    if (!dirStat.isDirectory()) {
      missing.push(`${dir} (must be a directory)`);
      continue;
    }

    const entries = await readdir(dir, { withFileTypes: true });
    const hasNestedContent = entries.some((entry) => entry.isFile() || entry.isDirectory());
    if (!hasNestedContent) {
      missing.push(`${dir}/ (must contain app assets)`);
    }
  } catch {
    missing.push(dir);
  }
}

if (missing.length) {
  console.error('Missing required original Tarteeb app sources:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Original Tarteeb source files are present and non-empty.');
