import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../../config';

const Templates = {
  postTemplates: data => (
    axios({
      method: 'post',
      url: `${API_URL}/template/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  getTemplates: (id, params) => (
    axios({
      method: 'get',
      url: id ? `${API_URL}/template/${id}` : `${API_URL}/template/?${params}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
  putTemplates: data => (
    axios({
      method: 'put',
      url: `${API_URL}/template/`,
      headers: { 'Content-Type': 'application/json' },
      data,
      timeout: API_TIMEOUT,
    })
  ),
  delTemplates: id => (
    axios({
      method: 'delete',
      url: `${API_URL}/template/${id}`,
      headers: { 'Content-Type': 'application/json' },
      timeout: API_TIMEOUT,
    })
  ),
};

export default Templates;
