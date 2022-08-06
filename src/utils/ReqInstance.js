const axios = require("axios");

export const reqInstance = axios.create({
  // baseURL: 'http://localhost:3000/api/',
  baseURL: "https://iaq-backend.herokuapp.com/api/",
  headers: {
    "API-KEY": "simple-key",
  },
});
