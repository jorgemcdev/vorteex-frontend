import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../config';


const get = (endpoint, id, params) => (
  axios({
    method: 'GET',
    url: id ? `${API_URL}/${endpoint}/${id}/` : `${API_URL}/${endpoint}/?${params}`,
    headers: { 'Content-Type': 'application/json' },
    timeout: API_TIMEOUT,
  })
);

const post = (endpoint, data) => (
  axios({
    method: 'post',
    url: `${API_URL}/${endpoint}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
    timeout: API_TIMEOUT,
  })
);

const put = (endpoint, id, data) => (
  axios({
    method: 'PUT',
    url: `${API_URL}/${endpoint}/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
    timeout: API_TIMEOUT,
  })
);

const patch = (endpoint, id, data) => (
  axios({
    method: 'PATCH',
    url: `${API_URL}/${endpoint}/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
    timeout: API_TIMEOUT,
  })
);

const del = (endpoint, id) => (
  axios({
    method: 'DELETE',
    url: `${API_URL}/${endpoint}/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    timeout: API_TIMEOUT,
  })
);

export default {
  get, post, put, patch, del
};
