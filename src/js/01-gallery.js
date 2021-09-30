import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
let createDivWithImg = galleryItems.map(item => {
  return `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
`;
});
document.querySelector('.gallery').insertAdjacentHTML('afterbegin', createDivWithImg.join(''));
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  fadeSpeed: 250,
});
