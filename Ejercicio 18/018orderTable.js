"use strict"

function orderTablePrimeraColumna(tabla){
    let filas= tabla.getElementsByTagName("tr");
    let cabecera=filas[0];
    let cuerpo=[]
    for (let i = 1; i < filas.length; i++) {
        cuerpo[i-1]=filas[i];
        
    }

    cuerpo.sort(compararFilas);
    tabla.innerHTML="";
    tabla.append(cabecera);
    cuerpo.forEach((item)=>tabla.append(item));
}

    function compararFilas(fila1,fila2){

    let primera_celda1=fila1.querySelector("td");
    let primera_celda2=fila2.querySelector("td");

    let texto1 = primera_celda1.textContent;
    let texto2 = primera_celda2.textContent;

    if (texto1.toUpperCase() > texto2.toUpperCase()) {
        return 1;
    }else{
        return -1;
    }
}

orderTablePrimeraColumna(document.querySelector("table"));