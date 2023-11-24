const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnS = document.querySelector("#btnCalcularSuma");
const btnR = document.querySelector("#btnCalcularResta");
const hover = document.querySelector("#hover");

let resultado = document.querySelector("#resultado");


function btnSOnClick() {
    let valor1 = Number(calculo1.value);
    let valor2 = Number(calculo2.value);
    let answer = (valor1 + valor2);
    resultado.append(answer);
};

function btnROnClick() {
    let valor1 = Number(calculo1.value);
    let valor2 = Number(calculo2.value);
    let answer = (valor1 - valor2);
    resultado.append(answer);
};

function insert() {
    hover.append('Estás haciendo hover sobre el botón de suma!');
    
};



btnS.addEventListener('click', btnSOnClick);
btnR.addEventListener('click', btnROnClick);

btnS.addEventListener('mouseover', insert);



