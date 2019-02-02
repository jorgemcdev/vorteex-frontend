import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const auth = {
  login: cred => (
    axios({
      method: 'post',
      url: `${API_URL}/authenticate/`,
      headers: { 'Content-Type': 'application/json' },
      data: { username: cred.username, password: cred.password },
      timeout: API_TIMEOUT,
    })
  ),
  tokenVerify: token => (
    axios({
      method: 'post',
      url: `${API_URL}/verify-token/`,
      headers: { 'Content-Type': 'application/json' },
      data: { token },
      timeout: API_TIMEOUT
    })
  )
};

export default auth;
