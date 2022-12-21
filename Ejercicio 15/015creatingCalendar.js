"use strict"

function createCalendar(elem,year,month) {

    let dia =new Date(year,month,1);
    let dia1semana = dia.getDay();

    let html = "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr>";
    let celda = 1;
    while (dia.getMonth() == month) {
        let fila="<tr>";
        for(let i=0;i<7;i++){
            fila+="<td>";
                if (celda>=dia1semana && dia.getMonth()==month){
                    fila+=dia.getDate();
                    dia.setDate(dia.getDate()+1);
                }
            fila+="</td>";
            celda++;
            }
        fila+="</tr>";
        html+=fila;
    }

    html+="</table>"
        elem.innerHTML=html;
    
}   

createCalendar(calendar,2022,11);


