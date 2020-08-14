import axios from 'axios';

// Where do we store the BASE URL, environement variable, here in a variable.. etc

const baseURL =
  process.env.REACT_APP_API_URL ||
  'https://cyj3eowb72.execute-api.us-east-2.amazonaws.com';

function successfulAPIRequest(result) {
  return {
    data: result.data,
    status: result.status,
    successful: result.status < 399,
  };
}

function unsuccessfulAPIRequest(result) {
  return {
    successful: false,
  };
}

export default class APIService {
  put(url, options) {
    return axios
      .put(`${baseURL}${url}`, options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }

  get(url, options) {
    return axios
      .get(`${baseURL}${url}`, options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }

  post(url, body, options) {
    return axios
      .post(`${baseURL}${url}`, body, options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }
}
