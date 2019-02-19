import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const bots = {
  postRoom: data => (
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
      url: id ? `${API_URL}/rooms/${id}` : `${API_URL}/rooms/?${params}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
  putRoom: data => (
    axios({
      method: 'put',
      url: `${API_URL}/rooms/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delRoom: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/bots/${id}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default bots;
