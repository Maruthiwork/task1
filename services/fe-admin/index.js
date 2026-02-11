const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from ADMIN 🚀\n");
}).listen(3000);
