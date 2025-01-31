function generaTabla(filas, columnas){

const nodoTabla=document.createElement("table");

for(let i=0;i<filas;i++){
const nodoFila=document.createElement("tr");

    for(let j=0;j<columnas; j++){
    const nodoColumna=document.createElement("td"); 
    const nodoTexto=document.createTextNode(`Fila ${i}, columna ${j}`);  
    nodoColumna.appendChild(nodoTexto);
    nodoFila.appendChild(nodoColumna);
}
nodoTabla.appendChild(nodoFila);
}



zonaTabla.appendChild(nodoTabla);




}