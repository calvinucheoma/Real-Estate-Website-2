import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {

  const {data} = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '90fc5d04eemsha1f0b26e8e55437p1cec00jsn3976c7bf3f3c',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  return data;
};