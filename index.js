//jshint esversion:6

//Inicializamos Express
const express=require('express');
const app=express();

//Otros require
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//Activo carpeta public para archivos estaticos
app.use(express.static('public'));

const puerto=3000;

//Seccion de rutas
app.get("/",function(req,res){
res.sendFile(__dirname+'/index.html');
});
app.post("/",function(req,res){
  //Recojo los valores que envian desde el formulario
  console.log(req.body);
  var sexo=(req.body.sexo);
  var apellidoPaterno=(req.body.apadre);
  var apellidoMaterno=(req.body.amadre);
});

//Arranca el servidor
app.listen(puerto,function(){
  console.log("El servidor está listo y escuchando en el puerto 3000");
});
