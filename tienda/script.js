window.addEventListener('load', iniciar, false);

function iniciar() {

    var imagen = document.getElementById('sueter_1');
    var imagen_2 = document.getElementById('sueter_2');
    var imagen_3 = document.getElementById('sueter_3');
    var imagen_4 = document.getElementById('sueter_4');
    var imagen_5 = document.getElementById('sueter_5');
    var imagen_6 = document.getElementById('sueter_6');
    
    imagen.addEventListener('mouseover', peligro, false);
    imagen.addEventListener('mouseout', restaurar, false);

    imagen_2.addEventListener('mouseover', peligro2, false);
    imagen_2.addEventListener('mouseout', restaurar, false);

    imagen_3.addEventListener('mouseover', peligro3, false);
    imagen_3.addEventListener('mouseout', restaurar, false);

    imagen_4.addEventListener('mouseover', peligro4, false);
    imagen_4.addEventListener('mouseout', restaurar, false);

    imagen_5.addEventListener('mouseover', peligro5, false);
    imagen_5.addEventListener('mouseout', restaurar, false);

    imagen_6.addEventListener('mouseover', peligro6, false);
    imagen_6.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
    var imagen = document.getElementById('sueter_1').src = "/productos/sueter.webp";
    var imagen_2 = document.getElementById('sueter_2').src = "/productos/sueter_2.webp";
    var imagen_3 = document.getElementById('sueter_3').src = "/productos/sueter_3.webp";
    var imagen_4 = document.getElementById('sueter_4').src = "/productos/sueter_4.jpg";
    var imagen_5 = document.getElementById('sueter_5').src = "/productos/sueter_5.jpg";
    var imagen_6 = document.getElementById('sueter_6').src = "/productos/sueter_6.jpg";
}

function peligro() {
    var imagen = document.getElementById('sueter_1').src = "/tallas/sueter.webp";
}

function peligro2() {
    var imagen_2 = document.getElementById('sueter_2').src = "/tallas/sueter_2.jpg";
}

function peligro3() {
    var imagen_3 = document.getElementById('sueter_3').src = "/tallas/sueter_3.webp";
}

function peligro4() {
    var imagen_4 = document.getElementById('sueter_4').src = "/tallas/sueter_4.jpg";
}

function peligro5() {
    var imagen_5 = document.getElementById('sueter_5').src = "/tallas/sueter_5.jpg";
}

function peligro6() {
    var imagen_6 = document.getElementById('sueter_6').src = "/tallas/sueter_6.jpg";
}