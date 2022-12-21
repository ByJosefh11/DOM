"use strict"

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
};    

    function createTree(container, data) {
        container.innerHTML = crearLista(data);
      }
  
    function crearLista(obj){
        let lista="";
        for (let key in obj) {
            if (key!=0) {
                lista+="<li>" + key + crearLista(obj[key])+ "</li>";   
            }
        }

        if (lista!="") {
            lista="<ul>"+ lista +"</ul>";
            
        }
        return lista;
    }
    let container = document.getElementById('container');
    createTree(container, data); // crea el árbol en el contenedor
    
