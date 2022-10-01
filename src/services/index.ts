import axios from 'axios';

import config from '../config';

const { BASE_URL } = config;

export const getCharacters = (page?: number) => {
  const URL = `${BASE_URL}/character${page ? `/?page=${page}` : ''}`;
  return axios.get(URL);
};

export const getLocations = () => {
  const URL = `${BASE_URL}/location`;
  return axios.get(URL);
};

export const getEpisodes = () => {
  const URL = `${BASE_URL}/episodes`;
  return axios.get(URL);
};
