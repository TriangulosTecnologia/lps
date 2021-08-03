import axios from 'axios';

const graphql = axios.create({
  baseURL: 'https://api.monday.com/v2',
  headers: {
    'Content-Type': 'application/json',
    /**
     * We get the Monday API accessing
     * Account -> Developer -> My Access Token.
     * Or https://YOUR_URL.monday.com/apps/manage/tokens
     */
    Authorization: process.env.MONDAY_TOKEN,
  },
});

export default graphql;
