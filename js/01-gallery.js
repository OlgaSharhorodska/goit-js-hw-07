import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr.map(({ preview }) => `<li class="gallery__image"><img src='${preview}' alt=""></li>`).join('');
}


gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));


console.log(galleryItems);
