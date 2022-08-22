const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');

function lampon(){
    if(!lampisbroken()){
        lamp.src = 'imagens/ligadaa.png';
    }
    
}
        
function lampoff(){
    if(!lampisbroken()){
        lamp.src = 'imagens/desligadaa.png';

    
}
}
    
function broken(){
    
        lamp.src = 'imagens/quebradaa.png';
    

}



function lampisbroken(){
    

    return lamp.src.indexOf('quebradaa') > -1;
}
function newlamp(){
    lamp.src = 'imagens/desligadaa.png'
}

turnon.addEventListener('click',lampon);
turnoff.addEventListener('click',lampoff);
lamp.addEventListener('mouseover',lampon);
lamp.addEventListener('mouseout',lampoff);
lamp.addEventListener('dblclick',broken);
fix.addEventListener('click',newlamp);


