import { cp, mkdir, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'strato');
const entries = ['index.html', 'style.css', 'app.js', 'assets'];

await mkdir(destination, { recursive: true });
for (const entry of entries) {
  await cp(path.join(root, entry), path.join(destination, entry), { recursive: true, force: true });
}

async function files(directory, prefix = '') {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) result.push(...await files(path.join(directory, entry.name), relative));
    else if (entry.isFile()) result.push(relative);
    else throw new Error(`Unsupported export entry: ${relative}`);
  }
  return result;
}

for (const relative of await files(destination)) {
  const original = await readFile(path.join(root, relative));
  const exported = await readFile(path.join(destination, relative));
  if (!original.equals(exported)) throw new Error(`Export mismatch: ${relative}`);
}
console.log('STRATO export ready: strato/ (verified against source files).');
