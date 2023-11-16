import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
//const API_KEY  = '56e623a6364593e332f15c43c9af7ecb';
const AccesToken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmU2MjNhNjM2NDU5M2UzMzJmMTVjNDNjOWFmN2VjYiIsInN1YiI6IjY1NGU0YzdjZDRmZTA0MDEzOTdlOWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oK_oZo1_t8pppztjX3lzPujAHltYYfjqlIqEp2mLhOQ"

export const FetchRequest = (url) => {
const options = {
  method: 'GET',
  url: `${BASE_URL}${url}`,
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AccesToken}`
  }
};

    return axios.request(options);
    //axios.get(`${BASE_URL}${url}?api_key=Bearer ${API_KEY}?language:en-US`);
    
};



// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });