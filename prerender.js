import fs from 'node:fs';
const ssr = await import('./dist/server/ssr.js');

const html = ssr.render();

const index = fs.readFileSync('./dist/client/index.html', 'utf8');
fs.writeFileSync(
  './dist/client/index2.html',
  index.replace('<!--ssr-outlet-->', html)
);
