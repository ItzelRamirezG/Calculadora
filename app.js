let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma); //Accion que queremos que realice js

function hacersuma(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 + n2);
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

let boton2 = document.getElementById('multi');
boton2.addEventListener('click', hacermultiplicacion); //Accion que queremos que realice js
function hacermultiplicacion(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 * n2);
    respuesta.innerHTML=`El resultado de la multiplicacion es: ${n3}`;
}

let boton3 = document.getElementById('restar');
boton3.addEventListener('click', hacerresta); //Accion que queremos que realice js
function hacerresta(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 - n2);
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

let boton4 = document.getElementById('division');
boton4.addEventListener('click', hacerdivision); //Accion que queremos que realice js
function hacerdivision(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = (n1 / n2);
    respuesta.innerHTML=`El resultado de la division es: ${n3}`;
}