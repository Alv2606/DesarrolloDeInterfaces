document.querySelector(".test").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Click en el botón");
})

/*document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Menú contextual esta intervenido.");
});*/

window.addEventListener("click", function(event) {
    console.log("Hemos hecho click en una ventana de la web.");
});