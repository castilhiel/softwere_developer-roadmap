https://www.w3schools.com/nodejs

# NodeJS home

NodeJS é um ambiente de servidor de código aberto.

O NodeJS permite a axecução de JavaScript no servidor.

### Exemplo da sintaxe do JavaScript:

```js
var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Hello Word");
  })
  .listen(8080);
```

### Execícios:

```js
var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(8080);
// ====================
var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(8080);
// ====================
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(8080);
// ====================
const server = require("http");

server
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(8080);
// ====================
const server = require("http");

server
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(8080);
// ====================
const server = require("http");

server
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(3000);
// ====================
const server = require("http");

server
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(65000);
// ====================
const server = require("http");

server
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("acabo");
  })
  .listen(9999);
```
