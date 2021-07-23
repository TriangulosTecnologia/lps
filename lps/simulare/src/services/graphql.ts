import axios from 'axios';

const graphql = axios.create({
  baseURL: 'https://api.monday.com/v2',
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.TOKEN_MONDAY,
  },
});

export default graphql;
