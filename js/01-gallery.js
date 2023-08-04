import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr.map(({ preview, original }) => `<li class="gallery__link gallery__item "><img class="gallery__image" src='${preview}' alt=""></li>`).join('');
}


gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));


console.log(galleryItems);
