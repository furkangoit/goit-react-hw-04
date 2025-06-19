import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = 'https://api.unsplash.com/search/photos';


if (!ACCESS_KEY) {

  console.error('Unsplash API access key is missing! Check your .env file.');
}

export async function fetchImages(query, page = 1, perPage = 12) {
  if (!ACCESS_KEY) {
    throw new Error('Unsplash API access key is missing!');
  }
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
}
