import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { renderToString } from 'react-dom/server';
import App from '../src/App.tsx';

const outputPath = resolve(process.cwd(), 'dist/index.html');
const template = readFileSync(outputPath, 'utf8');
const appHtml = renderToString(<App />);
const rootPlaceholder = '<div id="root"></div>';

if (!template.includes(rootPlaceholder)) {
  throw new Error('Prerender failed: root placeholder was not found in dist/index.html.');
}

writeFileSync(
  outputPath,
  template.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`),
  'utf8',
);

console.log('Prerendered the portfolio content into dist/index.html.');
