import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'cheerio';
import 'htmlparser2';
import 'dayjs';
import 'qs';
import 'protobufjs';

const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  const [resource, config] = args;

  const link = resource instanceof Request ? resource.url : resource.toString();

  const PROXY = `http://localhost:3001`;

  const _res = await originalFetch(
    `${PROXY}/${resource === 'cookies' ? '' : 'text/'}${encodeURIComponent(link)}`,
    {
      ...config,
      credentials: 'include',
      mode: 'cors',
    },
  );
  Object.defineProperty(_res, 'url', {
    value: _res.url.includes('localhost') ? resource.toString() : _res.url,
  });
  return _res;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
