import { renderToString } from 'react-dom/server';
import App from './App';

const render = () => {
  return renderToString(<App />);
};

export { render };
