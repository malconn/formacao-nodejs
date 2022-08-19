const express = require('express'); // Importando o Express 
const app = express(); // Iniciando o express


app.get("/",function(req,res){
 res.send("Bem vindo");
 // res.send("Outro dado");// Não funciona mais de uma vez, pois é fechada a conexão com o cliente
});

app.get("/blog/:artigo?",function(req,res){
 const artigo = req.params.artigo
 artigo ? 
 res.send(`
  <h1>Bem vindo ao meu site!</h1>
  <h2>Vamos falar sobre : ${artigo}</h2>
 `) : 
 res.send(`<h1>Bem vindo ao meu site!</h1>`)
});

app.get("/canal/youtube",function(req,res){
 const canal = req.query["canal"];
canal ?  res.send(`
 <h1>
  Bem vindo ao canal <span style="color:red">${canal}</span> !
 </h1>`):
 res.send(`
  <h1>Não tem nenhum canal selecionado!</h1>
  <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji-480x480.png.webp">
 `)
});

app.get("/ola/:nome/:empresa",function(req,res){
 // REQ => Dados enviados pelo user
 // RES => Resposta que vai ser enviada para o user
 const nome = req.params.nome
 const empresa = req.params.empresa
 res.send(`<h1>Olá, ${nome}  da  ${empresa}</h1>`);
})


app.listen(4000,function(erro){
 if(erro){
  console.log('Um erro ocorreu!');
 }else{
  console.log('Tudo rodando tranquilamente');
 }
})

