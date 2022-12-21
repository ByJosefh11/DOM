"use strict"

//creamos la variable li que contiene los dos principales li y el numero de anidados
let li = document.querySelector("ul").children;
let n_anid;

//usamos este for para iterar entre esos dos elementos
for (let element of li){
    alert(element.textContent); //nos muestra el contenido del li sin las etiquetas

    let titulo = element.firstChild.data.trim(); //nos quedamos con el texto del li principal y le quitamos los espacios y saltos de linea
    n_anid = element.querySelectorAll("li").length; //seleccionamos y contamos todos los li anidados

    alert("Número de <li> anidados en "+titulo+": "+n_anid); //muestra el numero de li anidados en cada li principal
}
