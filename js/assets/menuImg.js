var listaItems = document.querySelectorAll(".main_nav_list li");

for (var i = 0; i < listaItems.length; i++) {
  listaItems[i].addEventListener("click", function(event) {
    var seleccionado = this.getAttribute("data-categoria");
    var imagenes = document.querySelectorAll(".gallery picture");
    event.preventDefault();
    if(seleccionado == "all"){
      for(let i=0; i<imagenes.length; i++){
        imagenes[i].style.display="block";
      }
    }else{
      for (var j = 0; j < imagenes.length; j++) {
        imagenes[j].style.display = "none"; // Ocultar todas las imágenes
      }
      
      var imagenesMostrar = document.querySelectorAll("." + seleccionado);
      
      for (let k = 0; k < imagenesMostrar.length; k++) {
        imagenesMostrar[k].style.display = "block"; // Mostrar solo las imágenes seleccionadas
      }
    }
    
  });
}

