import { data } from "./datos.js";

const $fragmen = document.createDocumentFragment();
const $contenedor = document.querySelector(".container");
const $cards = document.createElement("div");

$contenedor.appendChild($cards);
$cards.classList.add("cards");
$cards.setAttribute("id", "cards");

data.map((obj) => {
  const $card = document.createElement("div");
  const $card_header = document.createElement("div");
  const $card__title = document.createElement("h2");
  const $card__body = document.createElement("div");
  const $card__img = document.createElement("img");
  const $card__paragraph = document.createElement("p");
  const $card__link = document.createElement("a");
  const $card__span = document.createElement("span");
  const $card__icon = document.createElement("i");

  const text_button = "Saber mas";

  $card.appendChild($card_header);
  $card.appendChild($card_header);
  $card_header.appendChild($card__title);
  $card.appendChild($card__body);
  $card__body.appendChild($card__img);
  $card__body.appendChild($card__paragraph);
  $card__body.appendChild($card__link);
  $card__link.appendChild($card__span);
  $card__link.appendChild($card__icon);

  $card.classList.add("card");
  $card_header.classList.add("card_header");
  $card__title.classList.add("card__title");
  $card__body.classList.add("card__body");
  $card__img.classList.add("card__img");
  $card__paragraph.classList.add("card__paragraph");
  $card__link.classList.add("button--outline");
  $card__link.classList.add("button");
  $card__icon.classList.add("bx", "bxs-chevron-right", "button__icon");

  $card__title.innerText = obj.titulo;
  $card__img.setAttribute("src", obj.src);
  $card__img.setAttribute("alt", "img");
  $card__paragraph.innerText = obj.paragraph;
  $card__span.innerText = text_button;
  $card__link.href = obj.url;

  console.log(obj);

  $fragmen.appendChild($card);
});

$cards.appendChild($fragmen);
