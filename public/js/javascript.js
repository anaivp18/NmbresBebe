$(".sexo").on("change",function(){
  var opcion=$(this).val();

  switch(opcion){
  case "0":{
  $(".foto").attr("src","imagenes/anonimo.jpg");
  break;
  }
  case "1":{
  $(".foto").attr("src","imagenes/nino.jpg");
  break;
  }
  case "2":{
  $(".foto").attr("src","imagenes/nina.jpg");
  break;

}
}
});
