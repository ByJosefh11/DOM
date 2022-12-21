"use strict"

//creamos la variable filas y celda diagonal
let filas = document.querySelector("table").rows;
let celdadiagonal;

//creamos un for donde se selecciona para cada fila la celda con el mismo indice, y que salga la casilla en rojo
for (let i = 0; i < filas.length; i++) {
    celdadiagonal=filas[i].cells[i];
    celdadiagonal.style.background="red";
  
}







