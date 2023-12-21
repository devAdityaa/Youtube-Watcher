const axios = require('axios');


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {id: 'dQw4w9WgXcQ'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
console.log(process.env.REACT_APP_API_KEY)

export const fetchFromApi = async (path)=> {
    try{
      console.log("URL",`${BASE_URL}/${path}`)
    const { data }=await axios.get(`${BASE_URL}/${path}`,options);
    return data;
    }
    catch(e){
        console.log(e)
    }
    
}
