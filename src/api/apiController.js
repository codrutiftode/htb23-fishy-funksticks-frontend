import axios from "axios";

const sendRequest = async (url, method, data) => {
  const response = await axios({
    method,
    url,
    data,
  });
  return response;
};

const get = async (url, data) => {
  const response = await sendRequest(url, "GET", data);
  return response;
};

const post = async (url, data) => {
  const response = await sendRequest(url, "POST", data);
  return response;
};

export const ApiController = {
  get,
  post,
};