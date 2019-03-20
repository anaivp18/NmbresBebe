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
  //Declaro dos Arrays de NOMBRES
  var nombresNene=["Andrés","Julián","Pelayo","Martin","Rodrigo"];
  var nombresNena=["Jimena","Lucia","Andrea","Patricia","Sandra"];

  //Escogemos aleatoriamente unnombre
  // 1. Genera un numero aleatorio entre 0 y X-1, siendo X
  // el número de nombres total del que dispongo
  // Ese número será la posición en el Array de nombres
  // En mi caso sería entre 0 y 4
var posicion=Math.round(Math.random()*4);
console.log(posicion);

//Comprobamos si es niño o niña y respondemos con un nombre
res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
res.write("<h1>Enhorabuena!!</h1>");
if (sexo==="1"){
  //Es niño
  res.write("<h2>Puedes llamarle "+nombresNene[posicion]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");
  }
if (sexo==="2"){
  //Es niña
  res.write("<h2>Puedes llamarle "+nombresNena[posicion]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");
  }
res.send();
});

//Arranca el servidor
app.listen(puerto,function(){
  console.log("El servidor está listo y escuchando en el puerto 3000");
});
