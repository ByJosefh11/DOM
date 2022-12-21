"use strict"

function handler() {
    alert( "..." );
    return false;
  }


// el onclick crea una funcion que llama a handler pero no devuelve su valor, entonces el onclick nunca recibe un false.

//para solucionarlo vamos a pedir que nos devuelva el return del handler.