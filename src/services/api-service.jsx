import axios from 'axios';

export default async function fetchImagesByQuery(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '33729128-9c007b81ac695147ac964a843',
      q: searchQuery,

      page: page,
      per_page: 12,
    },
  };
  const url = `${BASE_URL}`;
  try {
    const response = await axios.get(url, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
