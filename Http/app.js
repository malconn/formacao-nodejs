const http = require('http');

http.createServer(
 function(requisicao,resposta){
  resposta.end(`
    <h1>Seja bem vindo</h1>
    <p>O status da nossa resposta :${resposta.statusCode}</p>
  `);
 }
).listen(8181);

console.log('Server working ... ◕_◕');