"use strict"

function showNotification(options){
    let notif=createNotification();

    notif.style.top=options["top"];
    notif.style.right=options["right"];
    notif.innerHTML=options["html"];
    if(options["className"])
        notif.className += " " + options["className"];
}

function createNotification(){
    let notif=document.createElement("div");
    notif.className="notification";
    document.body.append(notif);
    return notif;
}

showNotification({
    top: 10, // 10px desde la parte superior de la ventana (por defecto es 0px)
    right: 10, // 10px desde el borde derecho de la ventana (por defecto es 0px)
    html: "Hello!", // el HTML de la notificación
    className: "welcome" // una clase adicional para el "div" (opcional)
});
