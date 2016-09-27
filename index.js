
var linky =document.getElementById("linky");//
var boton =document.getElementById("boton");//
var forms =document.getElementById("formu");//
var input =document.getElementById("input");
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
        //añadir();
    }; 
    function crear(){  
      var tarjetas = document.createElement("div");
      contenedorPapa.insertBefore(tarjetas, contenedorPapa.lastElementChild);
      tarjetas.classList.add("tarjetas");
      var newDiv =document.createElement("div");
      newDiv.innerHTML="<a>Add Card..</a>";
      var nombreLista = document.createElement("div");
      nombreLista.innerHTML= input.value;
      nombreLista.classList.add("up");
      tarjetas.appendChild(nombreLista);
      tarjetas.appendChild(newDiv);
      newDiv.classList.add("up");
      linky.classList.remove("none");
      forms.classList.add("none");
      //newDiv.addEventListener("click", clickeable);
    };
  });
    

