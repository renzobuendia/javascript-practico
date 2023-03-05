const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     // console.log({event});
//     event.preventDefault();
//     pResult.innerText = "Resultado: " + (Number(input1.value) + Number(input2.value));
// }


btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
    // event.preventDefault();
    pResult.innerText = "Resultado: " + (Number(input1.value) + Number(input2.value));
}

h1.addEventListener('mouseover', changeColor);
h1.addEventListener('mouseout', originalColor);

function changeColor(){
    h1.style.color = "red";
}

function originalColor(){
    h1.style.color = "black";
}