const express = require('express'); // Importando o Express 
const app = express(); // Iniciando o express


app.get("/",function(req,res){
 res.send("Bem vindo");
 // res.send("Outro dado");// Não funciona mais de uma vez, pois é fechada a conexão com o cliente
});

app.get("/blog",function(req,res){
 res.send('Bem vindo ao meu blog');
});

app.get("/canal/youtube",function(req,res){
 res.send('Bem vindo ao meu canal!');
});

app.listen(4000,function(erro){
 if(erro){
  console.log('Um erro ocorreu!');
 }else{
  console.log('Tudo rodando tranquilamente');
 }
})

