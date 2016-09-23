
var board = document.getElementById("clicky");
var linky =document.getElementById("linky");
var boton =document.getElementById("boton");
var forms =document.getElementById("formu");
var padre=document.getElementById("linky");
var padre2=document.getElementById("papa2");
var input =document.getElementById("input");

window.addEventListener("load", function() {
	board.addEventListener("click", boards);
    function boards() {
      board.classList.add("none");
      linky.classList.add("none");
      forms.classList.remove("none");
    };
    boton.addEventListener("click",botons);
    function botons(e){
      e.preventDefault();
        crear();
        añadir();
    }; 
    function crear(){  
      forms.classList.add("none");
      board.classList.remove("none");
      linky.classList.remove("none");
      linky.innerHTML=input.value;
      var newDiv =document.createElement("div");
      newDiv.innerHTML="<a>Add Card..</a>";
      padre.appendChild(newDiv);
      newDiv.classList.toggle("up");
      newDiv.addEventListener("click", clickeable);
    };
    function añadir(){
    	var contenedor=document.getElementById("contenedor");
      var padre3 =document.createElement("section");
      contenedor.appendChild(padre3);
      padre3.classList.toggle("newup");
      var aparecer =document.getElementById("clicky");
      aparecer.classList.toggle("newup2");
      padre3.appendChild(aparecer);
    };
    function clickeable() {
    newDiv.classList.add("none");
  };
    function clickeable() {
    newDiv.classList.add("none");
  };
});
 
