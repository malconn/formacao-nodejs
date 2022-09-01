const express = require('express');
const app = express();

//use o ejs como view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
 res.render('principal/perfil');
});

app.listen(8080,()=>{
 console.log('App rodando');
});