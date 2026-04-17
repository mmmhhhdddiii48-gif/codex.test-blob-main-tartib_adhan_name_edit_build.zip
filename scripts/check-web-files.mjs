import { access } from 'node:fs/promises';

const required = [
  'index.html',
  'app.js',
  'styles.css',
  'data-quran.js',
  'data-mafatih.js',
  'assets',
];

const missing = [];
for (const item of required) {
  try {
    await access(item);
  } catch {
    missing.push(item);
  }
}

if (missing.length) {
  console.error('Missing required Tarteeb project files/directories:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log('All required Tarteeb source files are present.');
