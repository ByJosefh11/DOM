"use strict"

//La tabla con id="age-table".

let tabla = document.getElementById("age-table");
alert(tabla.id);

//Los elementos labeldentro de la tabla (debería haber 3).

let labels=tabla.querySelectorAll("label");
alert(labels.length);

//El primer td en la tabla (con la palabra “Age”).
let age = tabla.querySelector("td");
alert(age.textContent);

//El form con name="search".
let search = document.querySelector('form[name="search"]');
alert(search);

//El primer input en ese formulario.
let inputs=search.querySelectorAll("input");

let input1=inputs[0];
alert(input1.type);

//El último input en ese formulario.
let input2=inputs[inputs.length-1];
alert(input2.type);

