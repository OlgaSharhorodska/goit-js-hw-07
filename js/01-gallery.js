import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"/>
       </a>
     </li>`).join('');
}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

gallery.addEventListener('click', onClickImage)

function onClickImage(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return;
    }
    const bigImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
	<div>
         <img width = "1140"
         src="${bigImage}" 
         alt="${galleryItems.description}"/>
     </div>
`)
    
    instance.show()



    window.addEventListener("keydown", onClickClose, { once: true });
 
    function onClickClose(evt) {
        if (!evt.code === "Escape") {
            return;
        }

        instance.close();
    }

}




