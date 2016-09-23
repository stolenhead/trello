
var board = document.getElementById("clicky");
var linky =document.getElementById("linky");
var boton =document.getElementById("boton");
var adding =document.getElementById("formu");
var newDiv =document.createElement("div");
var padre=document.getElementById("linky");
var padre2=document.getElementById("cont");
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
        
    });
    /* board.addEventListener("click",boards);
    function boards() {
     board.classList.add("none");
     linky.classList.add("none");
     adding.classList.remove("none");
    };
  boton.addEventListener("click",function(e){
    e.preventDefault()
         crear ();
         anadir ();
  });
  function crear (){
    adding.classList.add("none");
    board.classList.remove("none");
    linky.classList.remove("none");
    linky.innerHTML=input.value;
    var padre=document.getElementById("linky");
    var newDiv =document.createElement("div");
    newDiv.innerHTML="<a>Add Card..</a>";
    padre.appendChild(newDiv);
    newDiv.classList.toggle("up");
    newDiv.addEventListener("click", clickeable);
  };
  function anadir(){
    //padre.appendChild(newDiv);
    var newDiv3 =document.createElement("div");
    newDiv3.appendChild(padre3);
    //padre3.insertBefore(padre3,newDiv3.childNodes[2]);
  };
  function clickeable() {
    newDiv.classList.add("none");
  };*/

     

   /*var newDiv3 =document.createElement("div");
    board.appendChild(newDiv3);
    board.classList.toggle("newup");
    padre2.insertBefore(linky,padre2.childNodes[2]);*/
    /*var newDivi =document.createElement("a");
    var padre1=document.querySelector("div");
    newDivi.innerHTML= "Add List";
    padre1.appendChild(newDivi);
    newDiv2.classList.toggle("up");
    padre1.insertBefore(newDivi,padre1.childNodes[0]);*/
  });
  function clickeable() {
    newDiv.classList.add("none");
   /* var card=document.createElement("div");
    var padre1=document.getElementById("clicky");
    card.innerHTML="<textarea>escribir...</textarea>";
    padre1.appendChild(card);
    card.classList.toggle("up");
    clickeable();*/
    
  };
