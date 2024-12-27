import { save, load } from './localstorage.js';
import SimpleLightbox from 'simplelightbox';
// import localStorageApi from './localstorage';
// import * as localStorageApi from './localstorage.js';

new SimpleLightbox('.js-gallery a', { captionsData: 'alt', captionDelay: 250 });

// const formData = {
//   name: 'Oleksii',
//   email: 'test@gmail.com',
//   message: 'my message',
// };

// save('feedback-form-data', formData);

// const getFormDataFromLS = () => {
//   console.log(load('feedback-form-data'));
// };

// getFormDataFromLS();
