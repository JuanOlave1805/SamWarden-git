import { datos } from './datos.js';
//Identificamos el elemento por la clase
const $padre = document.querySelector('.container');
//Creamos un elemento
const nodo = document.createElement('p');
const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus pariatur? Velit eius porro quidem et nam quo, temporibus aspernatur maiores optio deleniti? Aut laborum sunt quam vel, blanditiis in?"

nodo.innerText = texto;
$padre.appendChild(nodo);

//Creamos un elemento
const nodo2 = document.createElement('p');
const texto2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus pariatur? Velit eius porro quidem et nam quo, temporibus aspernatur maiores optio deleniti? Aut laborum sunt quam vel, blanditiis in?"

nodo2.innerText = texto2;
$padre.appendChild(nodo2);


const buscando = document.querySelector('div.container > div.card > ul.list ');
console.log(buscando)

//Identificamos el elemento por la clase
const $agregando = document.querySelector('ul.list');



datos.map(a => {
  //Creamos un elemento
  const nodo_agregando = document.createElement('li');
  nodo_agregando.innerText = a.name;
  nodo_agregando.classList.add('item')
  $agregando.appendChild(nodo_agregando);
});
