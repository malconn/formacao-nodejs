const express = require('express'); // Importando o Express 
const app = express(); // Iniciando o express


app.listen(4000,function(erro){
 if(erro){
  console.log('Um erro ocorreu!');
 }else{
  console.log('Tudo rodando tranquilamente');
 }
})

