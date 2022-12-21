"use strict"

function ordenarTabla(tabla,columna){
    let filas= tabla.getElementsByTagName("tr");
    let cabecera=filas[0];
    let cuerpo=[]

    for (let i = 1; i < filas.length; i++) {
        cuerpo[i-1]=filas[i];
        
    }

    cuerpo.sort(function(f1,f2){return compararFilas(f1,f2,columna)});
    tabla.innerHTML="";
    tabla.append(cabecera);
    cuerpo.forEach((item)=>{tabla.append(item)});
}

    function compararFilas(fila1,fila2, columna){

    let tipo = document.getElementsByTagName("th")[columna].getAttribute("data-type");

    let comparar_celda1=fila1.querySelectorAll("td")[columna];
    let comparar_celda2=fila2.querySelectorAll("td")[columna];

    let texto1 = comparar_celda1.textContent;
    let texto2 = comparar_celda2.textContent;

    if (tipo== "number") {
    
        let n1=Number(texto1);
        let n2=Number(texto2);
        return n1-n2;
    }else{
        if (texto1.toUpperCase() > texto2.toUpperCase()) {
            return 1;
        }else{
            return -1;
        }
    }
}

