import axios from 'axios';

// Where do we store the BASE URL, environement variable, here in a variable.. etc

const baseURL =
  process.env.REACT_APP_API_URL ||
  'https://cyj3eowb72.execute-api.us-east-2.amazonaws.com';

const authURL =
  process.env.REACT_APP_AUTH_URL ||
  'https://visitors.auth.us-east-2.amazoncognito.com';

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
  buildURL(url, base) {
    const baseToUse = base ? authURL : baseURL;
    return `${baseToUse}${url}`;
  }

  put(url, options) {
    return axios
      .put(this.buildURL(url), options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }

  get(url, options) {
    return axios
      .get(this.buildURL(url), options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }

  post(url, body, options, base) {
    return axios
      .post(this.buildURL(url, base), body, options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }

  patch(url, body, options) {
    return axios
      .patch(this.buildURL(url), body, options)
      .then(successfulAPIRequest, unsuccessfulAPIRequest);
  }
}
