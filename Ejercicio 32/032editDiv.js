"use strict"

function crearDiv(html){
    document.body.innerHTML="<div id='contenedor'>"+html+"</div>";
    let div=document.getElementById("contenedor");
    div.addEventListener("click",()=>crearTextArea(div.innerHTML));
}

function crearTextArea(texto){
    document.body.innerHTML="<input type='textarea' id='area' value='"+texto+"'>";
    let area=document.getElementById("area");
    area.addEventListener("blur",()=>crearDiv(area.value));
    area.addEventListener("keypress",(e)=>{
                                            if(e.code=="Enter"){
                                                crearDiv(area.vlaue)
                                            }
                                        });
}

crearDiv("");