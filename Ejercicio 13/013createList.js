"use strict"

let entrada;
let seguir = true;

do {
    entrada = prompt("Inserta el siguiente elemento");
    if (entrada!=(null) && entrada!= "") {

        lista.insertAdjacentHTML("beforeend", "<li>"+entrada+"</li>");
    } else {
        seguir = false;
    }  

} while (seguir);

