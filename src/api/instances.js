import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../config';

const instances = {
  postInstances: data => (
    axios({
      method: 'post',
      url: `${API_URL}/instances/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  getInstances: id => (
    axios({
      method: 'get',
      url: id ? `${API_URL}/instances/${id}` : `${API_URL}/instances/`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
  putInstances: data => (
    axios({
      method: 'put',
      url: `${API_URL}/instances/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delInstances: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/instances/${id}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default instances;
