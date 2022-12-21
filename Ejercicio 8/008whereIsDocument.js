"use strict"

// 1. ¿A qué clase pertenece el document?

alert(document); //Nos muestra que es un objeto de la clase HTMLDocument


// 2. ¿Cuál es su lugar en la jerarquía DOM?

alert(document.parentNode); //El Document siempre esta en lo mas alto de la jerarquía


// 3. ¿Hereda de Node o Element, o tal vez HTMLElement?

//La clase HTMLDocument hereda de Document y a su vez de la clase nodo.