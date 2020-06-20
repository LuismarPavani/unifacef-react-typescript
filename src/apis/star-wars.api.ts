import axios from 'axios';

// https://star-wars-api-luismar.herokuapp.com
// https://star-wars-api-unifacef.herokuapp.com

const baseURL = process.env.REACT_APP_STAR_WARS_BASE_URL;

export const getFilms = async () => {
    return axios.request({ baseURL, url: `films` })
  }
  
  export const getFilmById = async (id: number) => {
    return axios.request({ baseURL, url: `films/${id}` })
  }
  