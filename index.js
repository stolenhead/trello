
var linky =document.getElementById("linky");//
var boton =document.getElementById("boton");//
var forms =document.getElementById("formu");//
var input =document.getElementById("input");
 var area=document.createElement("textarea");
var contenedorPapa = document.getElementById("contenedor");

window.addEventListener("load", function() {
  linky.addEventListener("click", boards);
  function boards() {
    linky.classList.add("none");
    forms.classList.remove("none");
    input.value= "";
  };

  boton.addEventListener("click",botons);
  function botons(e){
    e.preventDefault();
    crear();
    var tarjetitas = document.getElementsByClassName("tarjeta");
    for(var i= 0; i < tarjetitas.length; i++){
      tarjetitas[i].addEventListener("click", function(){
        this.classList.add("none");
        var newForm =document.createElement("form");
        this.parentElement.appendChild(newForm);
        this.classList.add("form");
      
        newForm.insertBefore(area,newForm.childNodes[0]);
        area.classList.add("area");
        var newBoton =document.createElement("button");
        newForm.insertBefore(newBoton,newForm.childNodes[1]);
        var botonTxt = document.createTextNode("Añadir");
        newBoton.appendChild(botonTxt);
        newBoton.classList.add("boton2");
        newBoton.setAttribute("type","submit");
        area.focus();
        });
        } 
        newBoton.addEventListener("click",function(e){
          e.preventDefault();
          var texto=area.value;
          var divi =document.createElement("div");
          divi.innerHTML = texto;
          newForm.classList.add("none");
          newForm.classList.remove("block");
          document.querySelector(".tarjeta").classList.remove("none");
          newForm.parentElement.appendChild(divi);
         
          divi.classList.add("up");
          divi.parentElement.appendChild(newForm);
        });
      
    function crear(){ 
      var newDiv =document.createElement("div");  
      var tarjetas = document.createElement("div");
      contenedorPapa.insertBefore(tarjetas, contenedorPapa.lastElementChild);
      tarjetas.classList.add("newup2");
      newDiv.innerHTML="<a>Add Card..</a>";
      var nombreLista = document.createElement("div");
      nombreLista.innerHTML= input.value;
      nombreLista.classList.add("up");
      tarjetas.appendChild(nombreLista);
      tarjetas.appendChild(newDiv);
      newDiv.classList.add("up");
      newDiv.classList.add("tarjeta");
      linky.classList.remove("none");
      forms.classList.add("none");
    }); 



   
  
