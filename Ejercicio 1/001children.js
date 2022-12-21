"use strict"

//creamos la variable div donde seleccionamos el primer hijo del body
let div = document.body.firstElementChild;
div.style.color="red";

//creamos la variable ul donde seleccionamos el segundo hijo del body
let ul = document.body.children[1];
ul.style.color="green";

//creamos la variable peterparker donde seleccionamos el ultimo hijo del ul
let peterparker = ul.lastElementChild
peterparker.style.color="blue";
