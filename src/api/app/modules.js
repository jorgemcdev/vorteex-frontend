import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const Modules = {
  postModules: data => (
    axios({
      method: 'post',
      url: `${API_URL}/modules/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  getModules: (id, params) => (
    axios({
      method: 'get',
      url: id ? `${API_URL}/modules/${id}` : `${API_URL}/modules/?${params}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
  putModules: data => (
    axios({
      method: 'put',
      url: `${API_URL}/modules/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delModules: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/modules/${id}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default Modules;
