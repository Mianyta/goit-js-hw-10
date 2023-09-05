import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common['x-api-key'] =
  'live_Tz5X8XRRB8yQyOZGGy3wlOiqeAyfHz4Ij2FwuF79hLnRyfUhW2cIpmLRDDJaDwAv';

const refs = {
  breedList: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
};

function fetchBreeds() {
  refs.breedList.classList.replace('breed-select', 'breed-select-hidden');
  return axios
    .get('/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    });
}

function fetchCatByBreed(breedId) {
  refs.container.classList.replace('cat-info', 'cat-info-hidden');
  refs.loaderEl.classList.replace('loader-hidden', 'loader');
  return axios
    .get(`/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    });
}

export { fetchBreeds, fetchCatByBreed };
