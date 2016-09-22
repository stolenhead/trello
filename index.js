window.addEventListener("load", function() {
  var board = document.getElementById("linky");
  board.addEventListener("click", function() {
     var deleted =document.getElementById("linky");
     deleted.classList.add("none");
     var adding =document.getElementById("formu");
     adding.classList.remove("none");
	});
});