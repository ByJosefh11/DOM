"use strict"
    let id;
    function actualizar(){
        let ahora=new Date(Date.now());

        let hora=ahora.getHours();
        hora=(hora<10?"0":"")+hora;
        document.getElementById("hh").textContent=hora;

        let minuto=ahora.getMinutes();
        minuto=(minuto<10?"0":"")+minuto;
        document.getElementById("mm").textContent=minuto;

        let segundo=ahora.getSeconds();
        segundo=(segundo<10?"0":"")+segundo;
        document.getElementById("ss").textContent=segundo;
    
    }

    function encenderReloj(){
        if (!id) {
            id=setInterval(actualizar,1000);
        }
    }

    function apagarReloj(){
        clearInterval(id);
        id=null;
    }
