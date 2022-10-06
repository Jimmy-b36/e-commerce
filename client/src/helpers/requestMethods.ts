import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM0OTJhOTMyNmIzNDFmODNiOTE3MmYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjUwNjg5MTAsImV4cCI6MTY2NTMyODExMH0.iZLOT2hfy9H2CyStZjPdvuZQOgZgQSCsyt34vgbK1UM';

export const apiRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
