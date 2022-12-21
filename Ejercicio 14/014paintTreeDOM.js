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
        container.append(crearNodos(data));
    };

    function crearNodos(obj){
        if(!Object.keys(obj).length)return;
        let ul = document.createElement("ul");

        for (let key in obj) {
            if (key!=0) {
                let li = document.createElement("li");
                li.innerText=key;
                ul.append(li);
                ul.append(crearNodos(obj[key]));
            }
        }
        return ul;
    }
    let container = document.getElementById('container');
    createTree(container, data); // crea el árbol en el contenedor
    
