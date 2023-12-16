import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr.map(({ original, preview, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`).join('');
}

const galleryHTML = createMarkup(galleryItems);
galleryList.innerHTML = galleryHTML;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  enableKeyboard: true,
});
