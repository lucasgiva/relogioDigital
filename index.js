// capturando IDS: 
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time (){
    // Acessando objeto Date: 
    let dateToday = new Date(); 
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    // condicional para caso a hora, o minuto ou o segundo seja menor que 10:  
    if (hr < 10) hr = "0" + hr; 
    if (min < 10) min = "0" + min; 
    if (sec < 10) sec = "0" + sec; 
    
    horas.textContent = hr; 
    minutos.textContent = min; 
    segundos.textContent = sec;
    

})