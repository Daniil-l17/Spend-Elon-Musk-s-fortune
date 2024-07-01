import axios from 'axios';

export const axiosBase = axios.create({
    baseURL: process.env.API_URL
});
