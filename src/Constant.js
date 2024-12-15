import axios from "axios";
export const API_URL = 'https://travel-agency-q1ld.onrender.com/';

export const fetchApi = async (url, method, data) => {
     
     const token = localStorage.getItem('token');
     const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
     };
     try {
          const response = await axios({
               method,
               url: API_URL + url,
               data,
               headers
          });
          return response;
     } catch (error) {
     console.log("eror " + error.response);
     return error.response;
     }
};