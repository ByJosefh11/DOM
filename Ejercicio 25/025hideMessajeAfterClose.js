"use strict"
let paneles = document.querySelectorAll(".panel"); //seleccionamos todos los paneles

for(let panel of paneles) { //en cada panel añadimos un boton de la clase "cerrarpanel" al principio
  panel.insertAdjacentHTML("afterbegin", '<button class="cerrarpanel">[x]</button>');
  // le damos al primer hijo (nuestro boton) la funcionalidad de cerrar el panel.
  panel.firstChild.onclick = () => panel.remove();
}
