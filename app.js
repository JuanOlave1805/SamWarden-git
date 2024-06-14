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
console.log(pasarMayuscula);



console.log(win);
console.log(doc);

console.log(doc.doctype);
console.log(doc.head);
console.log(doc.body);
console.log(doc.children);
console.log(doc.children[1]);

let aarr = [...body.children]
aarr.forEach(element => {
  console.log(element)
});

console.log(divs);
console.log(form);
console.log(doc.links);
console.log('por id', porId);
console.log('por id con query selector', porIdNuevo);
console.log('por clase', porClase);
console.log(atributo);
console.log(atributo2);
console.log(pasarMayuscula);
