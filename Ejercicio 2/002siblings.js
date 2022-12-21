"use strict"

//creamos la variable ul donde seleccionamos el segundo hijo del body
let ul = document.body.children[1];

//Sale null porque nos coje el ultimo nodo y ya no hay mas nodos despues del ultimo.
alert (ul.lastChild.nextSibling);

//Sale <object text> ya que nos coje el primer hijo elemento y nos muestra el previo, y si que puede haber un nodo antes del primer elemento. Que en este caso no se ve ya que es un texto vacio
alert (ul.children[0].previousSibling );


