let win = window;
let doc = document;
let body = doc.body;
let divs = doc.querySelectorAll('div');
let form = doc.querySelector('form');
let porId = doc.getElementById('documento');
let porIdNuevo = doc.querySelector('#documento');
let porClase = doc.querySelectorAll('.container');
let atributo = doc.getElementsByName('search');
let atributo2 = doc.querySelectorAll('ul.list > li.item');
let pasarMayuscula = doc.getElementById('api')
pasarMayuscula.innerHTML = "¿QUE ES API?";
console.clear;
const padre = doc.getElementById('cards');
console.log(padre.children);
const nuevo = [...padre.children];
const black_text = doc.querySelectorAll('p.card__paragraph')
console.log(black_text);
const nuevo2 = [...black_text];
nuevo.map((a, i) => {
  if (i % 2 !== 0) {
    a.classList.toggle('bg-white');
  }
  return a;
});

nuevo2.map((a, i) => {
  if (i % 2 !== 0) {
    a.classList.toggle('text-black');
  }
  return a;
});

const $formulario = doc.getElementById('search');

// Forma uno
const input = doc.querySelector('form > input');
console.log(input)
input.setAttribute("autocomplete", "on");

// Forma dos
// const input2 = doc.querySelector('input');
// console.log(input2)
// input.setAttribute("autocomplete", "on");


const input2 = doc.querySelector('input');
console.log(input2)
// Modificar
input2.setAttribute("placeholder", "Holaaaaaaaaa");
// Eliminar
input2.removeAttribute("placeholder")

// Custom properites CSS
// Forma 1
const $html = doc.querySelector("html")
console.log($html)

// Forma 2
const $html2 = doc.documentElement;

const color_oscuro = getComputedStyle($html2).getPropertyValue("--MineShaft")
const color_claro = getComputedStyle($html2).getPropertyValue("--white")

$html2.style.setProperty('--MineShaft','#fff');
$html2.style.setProperty('--white', '#000000');

// console.log(win);
// console.log(doc);

// console.log(doc.doctype);
// console.log(doc.head);
// console.log(doc.body);
// console.log(doc.children);
// console.log(doc.children[1]);

// let aarr = [...body.children]
// aarr.forEach(element => {
//   console.log(element)
// });

// console.log(divs);
// console.log(form);
// console.log(doc.links);
// console.log('por id', porId);
// console.log('por id con query selector', porIdNuevo);
// console.log('por clase', porClase);
// console.log(atributo);
// console.log(atributo2);
// console.log(pasarMayuscula);
