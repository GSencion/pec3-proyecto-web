//Declaración e inicialización de variables
let btnMenu = document.querySelector('#cruz');
let aspa = document.querySelector('#cruz');
let menu = document.querySelector('#menu');

//Escucha de eventos
btnMenu.addEventListener('click', muestraMenu);

//Función que despliega el menú cambiando la clase del doom
function muestraMenu(){
    menu.classList.toggle('mostrar');
    aspa.classList.toggle('fa-xmark');
}