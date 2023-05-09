let btn = document.querySelectorAll('.buttons');
let paragraph = document.querySelector('#result');

function insert(digt) {
    let numero = paragraph.textContent;
    let numTot =  paragraph.textContent = numero  + digt; 
    return numTot  
};



function clean() {
    result.innerHTML = '';
    
};

function back() {   
    let result = document.querySelector('#result').innerHTML;
    paragraph.innerHTML = result.substring(0, result.length -1);

};

function calcular() {
    let result = document.querySelector("#result").innerHTML;   
        document.querySelector('#result').innerHTML = eval(result);    
}
