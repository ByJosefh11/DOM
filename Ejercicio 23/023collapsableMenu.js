"use strict"
function abrirCerrarLista(){
    lista.hidden=!lista.hidden;
    if(lista.hidden){
        flecha.textContent="►";
    }else{
        flecha.textContent="▼";
    }
}
cabecera.addEventListener("click", () => abrirCerrarLista());
