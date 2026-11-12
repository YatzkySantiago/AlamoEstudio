// Renders the app to static HTML after `vite build`, so search engines and AI crawlers
// that don't run JavaScript still read the full content of the page.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('Missing <!--app-html--> in dist/index.html');

writeFileSync(resolve(dist, 'index.html'), template.replace('<!--app-html-->', render()));
rmSync(resolve('dist-ssr'), { recursive: true, force: true });
console.log('Prerendered dist/index.html');
