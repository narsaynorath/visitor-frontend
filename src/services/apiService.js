import axios from 'axios';

// Where do we store the BASE URL, environement variable, here in a variable.. etc

function successfulAPIRequest(result) {
  // Need to format correctly
  return {
    data: result.data,
    status: result.status,
    success: result.status < 399,
  };
}

function unsuccessfulAPIRequest(result) {
  //TODO: need to decide on what we want to send
  return result;
}

export default class APIService {
  put(url, options) {
    axios.put(url, options).then(successfulAPIRequest, unsuccessfulAPIRequest);
  }
}
