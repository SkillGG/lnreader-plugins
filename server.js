import express from 'express';

const server = express();

const CLIENT_HOST = 'http://localhost:3000';

const allowedHeaders = ['Origin', 'Content-Type', 'Accept', 'User-Agent'];

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', CLIENT_HOST);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', allowedHeaders.join(', '));
  next();
});

const temp_data = {
  cookies: '',
};

server.post('/cookies', (req, res) => {
  console.log('Got cookies');
  // addCORSHeaders(req, res);
  temp_data.cookies = req.body;
  console.log('Saved cookies', temp_data.cookies);
  res.status(204).send();
});

const proxyFetch = async (
  req,
  res,
  parser = { method: 'text', fn: o => o },
) => {
  const { _link } = req.params;
  if (!_link) return res.status(400).send('Empty URL!');

  console.log(_link.startsWith('https://'));

  const link =
    (!_link.startsWith('http://') && !_link.startsWith('https://')
      ? 'https://'
      : '') + _link;
  try {
    const _url = new URL(link);
    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      const data = await fetch(_url, {
        headers: { ...req.headers, 'cookies': temp_data.cookies },
      }).then(t => {
        return t[parser.method ?? 'text']();
      });
      res.status(200).send((parser.fn ?? (o => o))(data));
    }
  } catch (err) {
    return res.status(500).send(`Error fetching! ${err.message}`);
  }
};

server.get('/json/:_link', async (req, res) => {
  proxyFetch(req, res, { fn: o => JSON.stringify(o), method: 'json' });
});

server.get('/text/:_link', async (req, res) => {
  proxyFetch(req, res, { method: 'text' });
});

server.listen(3001, 'localhost', () => {
  console.log(`Proxy server listening on http://localhost:3001`);
});
