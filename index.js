const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const server = http.createServer((req, res) => {
  const { url: pathName } = req;
  console.log('Pathname: ', pathName);

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
  } else if (pathName === '/product') {
    res.end('This is the product');
  } else if (pathName == '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () =>
  console.log('Listening to request on port 8000...')
);
