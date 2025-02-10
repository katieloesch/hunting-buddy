import axios from 'axios';

const customFetch = axios.create({
  baseURL: '/api/v1',
});

// Use an async function instead of top-level await
async function fetchData() {
  try {
    await customFetch.get('/test');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function (if needed on module load)
fetchData();

export default customFetch;
