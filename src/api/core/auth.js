import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const auth = {
  login: data => (
    axios({
      method: 'post',
      url: `${API_URL}/auth/jwt/create/`,
      headers: { 'Content-Type': 'application/json' },
      data: { username: data.username, password: data.password },
      timeout: API_TIMEOUT,
    })
  ),
  refresh: refresh => (
    axios({
      method: 'post',
      url: `${API_URL}/auth/jwt/refresh/`,
      headers: { 'Content-Type': 'application/json' },
      data: { refresh },
      timeout: API_TIMEOUT
    })
  ),
  verify: token => (
    axios({
      method: 'post',
      url: `${API_URL}/auth/jwt/verify/`,
      headers: { 'Content-Type': 'application/json' },
      data: { token },
      timeout: API_TIMEOUT
    })
  )
};

export default auth;
