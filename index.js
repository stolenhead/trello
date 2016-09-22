
var board = document.getElementById("clicky");
var linky =document.getElementById("linky");
var boton =document.getElementById("boton");
var adding =document.getElementById("formu");
var newDiv =document.createElement("div");
var padre=document.getElementById("linky");
var input =document.getElementById("input");
window.addEventListener("load", function() {
 
  board.addEventListener("click", function() {
    board.classList.add("none");
    linky.classList.add("none");
    adding.classList.remove("none");
  });
  boton.addEventListener("click",function(){
    adding.classList.add("none");
    board.classList.remove("none");
    linky.classList.remove("none");
    linky.innerHTML=input.value;
   
    newDiv.innerHTML="<a>Add Card..</a>";
    newDiv.classList.toggle("up");
    newDiv.addEventListener("click", clickeable);
    padre.appendChild(newDiv);
    /*var newDivi =document.createElement("a");
    var padre1=document.querySelector("div");
    newDivi.innerHTML= "Add List";
    padre1.appendChild(newDivi);
    newDiv2.classList.toggle("up");
    padre1.insertBefore(newDivi,padre1.childNodes[0]);*/
  });
  function clickeable() {
    newDiv.classList.add("none");
    var card=document.createElement("div");
    var padre1=document.getElementById("clicky");
    card.innerHTML="<textarea>escribir...</textarea>";
    padre1.appendChild(card);
    card.classList.toggle("up");
    clickeable();
  };
});