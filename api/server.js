const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  res.header('X-Server-Time', new Date().toISOString());
  res.header('Access-Control-Expose-Headers', 'X-Server-Time');
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server está rodando na porta 3000');
});
