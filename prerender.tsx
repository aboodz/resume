import fs from 'node:fs';
import { renderToString } from 'react-dom/server';
import App from './src/App';

const indexPath = './dist/client/index.html';
const shell = fs.readFileSync(indexPath, 'utf8');
const html = renderToString(<App />);
fs.writeFileSync(indexPath, shell.replace('<!--ssr-outlet-->', html));
