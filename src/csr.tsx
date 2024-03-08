import App from './App';
import { createRoot } from 'react-dom/client';

import './index.scss';

const root = document.getElementById('app');

if (!root) throw new Error('Root element not found');

createRoot(root).render(<App />);
