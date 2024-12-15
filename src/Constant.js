
import axios from "axios";
export const API_URL = 'http://localhost:5000/';

export const fetchApi = async (url, method, data) => {
     const token = localStorage.getItem('token');
     const headers = {
          'Content-Type': 'application',
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
          return error.response;
     }
};