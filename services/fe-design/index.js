const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from DESIGN 🎨\n");
}).listen(3000);
