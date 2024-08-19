import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

let lightbox = new SimpleLightbox('.gallery a');

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
let currentQuery = '';
let currentPage = 1;

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  currentQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!currentQuery) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  gallery.innerHTML = '';
  currentPage = 1;

  try {
    iziToast.info({ title: 'Loading', message: 'Fetching images...' });

    const data = await fetchImages(currentQuery);
    if (data.hits.length === 0) {
      iziToast.warning({ title: 'Warning', message: 'No images found!' });
    } else {
      renderImages(data.hits);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  } finally {
    iziToast.destroy();
  }
}
