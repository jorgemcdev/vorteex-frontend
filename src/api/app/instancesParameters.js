import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const instancesParameters = {
  postInstancesParam: data => (
    axios({
      method: 'post',
      url: `${API_URL}/instances_parameter/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  getInstancesParam: (id, params) => {
    let url;
    if (id) {
      url = `${API_URL}/instances_parameter/${id}/`;
    } else if (params) {
      url = `${API_URL}/instances_parameter/${params}`;
    } else {
      url = `${API_URL}/instances_parameter/`;
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
  putInstancesParam: data => (
    axios({
      method: 'put',
      url: `${API_URL}/instances_parameter/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  patchInstancesParam: (id, data) => (
    axios({
      method: 'patch',
      url: `${API_URL}/instances_parameter/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delInstancesParam: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/instances_parameter/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default instancesParameters;
