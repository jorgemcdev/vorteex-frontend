import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../config';

const bots = {
  postBot: data => (
    axios({
      method: 'post',
      url: `${API_URL}/bots/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  getBots: id => (
    axios({
      method: 'get',
      url: id ? `${API_URL}/bots/${id}` : `${API_URL}/bots/`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
  putBot: data => (
    axios({
      method: 'put',
      url: `${API_URL}/bots/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delBot: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/bots/${id}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default bots;
