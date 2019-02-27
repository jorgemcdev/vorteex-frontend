import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const bots = {
  postRooms: data => (
    axios({
      method: 'post',
      url: `${API_URL}/rooms/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  getRooms: (id, params) => (
    axios({
      method: 'get',
      url: id ? `${API_URL}/rooms/${id}/` : `${API_URL}/rooms/?${params}/`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
  putRooms: data => (
    axios({
      method: 'put',
      url: `${API_URL}/rooms/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  patchRooms: (id, data) => (
    axios({
      method: 'patch',
      url: `${API_URL}/rooms/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delRooms: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/bots/${id}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default bots;
