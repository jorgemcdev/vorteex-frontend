import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

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
  getInstances: (id, params) => {
    let url;
    if (id) {
      url = `${API_URL}/instances/${id}/`;
    } else if (params) {
      url = `${API_URL}/instances/${params}`;
    } else {
      url = `${API_URL}/instances/`;
    }
    return (
      axios({
        method: 'get',
        url,
        headers: { 'Content-Type': 'application/json' },
        timeout: API_TIMEOUT,
      })
    );
  },
  putInstances: data => (
    axios({
      method: 'put',
      url: `${API_URL}/instances/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  patchInstances: (id, data) => (
    axios({
      method: 'patch',
      url: `${API_URL}/instances/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delInstances: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/instances/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default instances;
