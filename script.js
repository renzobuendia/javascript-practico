const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({h1,
    p,
    parrafito,
    pid,
    input});

h1.innerText = 'Patito <br> Feo'
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');
h1.classList.add('verde');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = '456';

const img = document.createElement('img');

//img.src
img.setAttribute('src', 'https://images.unsplash.com/photo-1677629322483-e9b7c49ee48f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80');


pid.innerHTML = "";
pid.append(img);
// pid.remove();