import axios from 'axios';
const apiKey = "21bd239e8bb74fd584c39ffc6ee0e03a";

export default axios.create({
    method: "get",
    baseURL: "https://newsapi.org/v2",
    params: {
      pageSize: 6
    },
    headers: {
      Authorization: apiKey
    }
  });