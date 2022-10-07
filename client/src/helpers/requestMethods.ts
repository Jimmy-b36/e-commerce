import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM0OTJhOTMyNmIzNDFmODNiOTE3MmYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjUxNjEyOTIsImV4cCI6MTY2NTQyMDQ5Mn0.Nxu7ptV5cd9zcd-DVKBFLYsAdRXJhr4BsIm7n7MzuO0';

export const apiRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
