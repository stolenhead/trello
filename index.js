
var linky =document.getElementById("linky");//
var boton =document.getElementById("boton");//
var forms =document.getElementById("formu");//
var input =document.getElementById("input");

var contenedorPapa = document.getElementById("contenedor");

var contador=1;
window.addEventListener("load", cargarPagina);
function cargarPagina (){
  linky.addEventListener("click", boards);
}

function boards() {
  linky.classList.add("none");
  forms.classList.remove("none");
  input.value= "";
}

boton.addEventListener("click",botons);
function botons(e){
  e.preventDefault();
  crear();
}

function crear(){ 
  var newDiv =document.createElement("div");  
  var tarjetas = document.createElement("div");
  tarjetas.addEventListener("dragover", arrastrarSobre);
  tarjetas.addEventListener("drop", soltar);
  tarjetas.addEventListener("dragenter", entraArrastrar);
    
  contenedorPapa.insertBefore(tarjetas, contenedorPapa.lastElementChild);
  //contenedorPapa.insertBefore(newDiv,contenedorPapa.lastElementChild);
  tarjetas.classList.add("tarjetas");
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
  crearNewForm();
  newDiv.addEventListener("click",function(){
    this.nextElementSibling.classList.remove("none");
    this.classList.add("none");
  });

  function crearNewForm (){
    //newDiv.classList.add("none");
    var div2 = document.createElement("form");
    var textArea2 =document.createElement("textarea");
    var addBoton=document.createElement("button");
    div2.classList.add("navbar-form","form-group","formu2")
    tarjetas.appendChild(div2);
    div2.appendChild(textArea2);
    textArea2.classList.add("rellenar2");
    div2.appendChild(addBoton);
    div2.classList.add("none");
    //div2.insertBefore(addBoton,div2.firstChild);//.lastElementChild);
    addBoton.classList.add("boton2","btn-warning","btn");
    addBoton.textContent ="Add";
    addBoton.setAttribute("type","submit");
    addBoton.addEventListener("click",botonAdd);
    function botonAdd(e){
      e.preventDefault();
      newDiv.classList.remove("none");
      var texto=textArea2.value;
      var divi =document.createElement("div");
      divi.innerHTML = texto;
      divi.classList.add("newup2");
      divi.setAttribute("draggable","true");
      divi.setAttribute("id","movible"+contador);
      divi.addEventListener("dragstart", empiezaArrastrar);
      divi.addEventListener("dragend", terminaArrastrar);
      contador++;
      //tarjetas.appendChild(divi);
      tarjetas.insertBefore(divi,tarjetas.lastElementChild.previousElementSibling);
      div2.classList.add("none");
    
    
   
    
    
    
    //tarjetas[i].addEventListener("dragleave", dejaArrastrar);
   
    
   }
  }
      //display none
}
function empiezaArrastrar(e) {
  e.dataTransfer.setData("text", this.id);
  this.style.opacity = "0.4";
}

function entraArrastrar(e) {
  this.classList.add("over");
}

function dejaArrastrar(e) {
  this.classList.remove("over");
}

function arrastrarSobre(e) {
  e.preventDefault();
}

function soltar(e) {
  var idArrastrado = e.dataTransfer.getData("text");
  var elementoArrastrado = document.getElementById(idArrastrado);
  var temporal = this.innerHTML;
  this.insertBefore(elementoArrastrado,this.childNodes[1]);
  //e.target.innerHTML = elementoArrastrado.innerHTML;
 // elementoArrastrado.innerHTML = temporal;
  this.classList.remove("over");
}

function terminaArrastrar(e) {
  this.style.opacity = null;
}
        
       /* var newBoton =document.createElement("button");
        newForm.insertBefore(newBoton,newForm.childNodes[1]);
        var botonTxt = document.createTextNode("Añadir");
        newBoton.appendChild(botonTxt);
        newBoton.classList.add("boton2");
        newBoton.setAttribute("type","submit");
        area.focus();
      function botonAdd(){
        var newBoton =document.createElement("button");
        newForm.insertBefore(newBoton,newForm.childNodes[1]);
        var botonTxt = document.createTextNode("Añadir");
        newBoton.appendChild(botonTxt);
        newBoton.classList.add("boton2");
        
        area.focus();
      };*/

     /* var botonBoton =document.getElementsByClassName("boton2") ;
      var form2=document.getElementsByClassName("form");
      for(var i= 0; i < botonBoton.length; i++){
        botonBoton[i].addEventListener("click",function(e){
          e.preventDefault();
          var texto=area.value;
          var divi =document.createElement("div");
          divi.innerHTML = texto;
          form2.classList.add("none");
          form2.classList.remove("block");
          document.querySelector(".tarjeta").classList.remove("none");
          form2.parentElement.appendChild(divi);
         
          divi.classList.add("up");
          divi.parentElement.appendChild(form2);
        });
      }*/
      




   
  
