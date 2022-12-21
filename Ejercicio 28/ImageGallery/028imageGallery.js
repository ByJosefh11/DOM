"use strict"

function selectImg(img){
    let url=img.src;
    document.getElementById("big").src=url;
    clearSelections();
    img.className="miniatura selected";
}
function clearSelections(){
    let mini=document.getElementById("miniaturas").getElementsByTagName("img");
    for(let i=0;i<5;i++)
        mini[i].className="miniatura";
};

selectImg(document.getElementById("miniaturas").getElementsByTagName("img")[0]);