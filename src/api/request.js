import axios from 'axios';
import { API_URL, API_TIMEOUT } from '../config';


function request(endpoint, method) {

    method = method.toLowerCase();

    switch (method) {

        case 'get':
            return (id, params) => (
                axios({
                    method: method,
                    url: id ? `${API_URL}/${endpoint}/${id}/` : `${API_URL}/${endpoint}/?${params}`,
                    headers: { 'Content-Type': 'application/json' },
                    timeout: API_TIMEOUT,
                })
            )

        case 'post':
            return (data) => (
                axios({
                    method: method,
                    url: `${API_URL}/${endpoint}/`,
                    headers: { 'Content-Type': 'application/json' },
                    data,
                    timeout: API_TIMEOUT,
                })
            )

        case 'put':
            return (id, data) => (
                axios({
                    method: method,
                    url: `${API_URL}/${endpoint}/${id}/`,
                    headers: { 'Content-Type': 'application/json' },
                    data,
                    timeout: API_TIMEOUT,
                })
            )

        case 'patch':
            return (id, data) => (
                axios({
                    method: method,
                    url: `${API_URL}/${endpoint}/${id}/`,
                    headers: { 'Content-Type': 'application/json' },
                    data,
                    timeout: API_TIMEOUT,
                })
            )

        case 'delete':
            return (id) => (
                axios({
                    method: method,
                    url: `${API_URL}/${endpoint}/${id}/`,
                    headers: { 'Content-Type': 'application/json' },
                    timeout: API_TIMEOUT,
                })
            )

        case 'login':
            return (data) => (
                axios({
                    method: 'post',
                    url: `${API_URL}/${endpoint}/`,
                    headers: { 'Content-Type': 'application/json' },
                    data: { username: data.username, password: data.password },
                    timeout: API_TIMEOUT,
                })
            )

        case 'refresh':
            return (refresh) => (
                axios({
                    method: 'post',
                    url: `${API_URL}/${endpoint}/`,
                    headers: { 'Content-Type': 'application/json' },
                    data: { refresh },
                    timeout: API_TIMEOUT
                })
            )

        case 'verify':
            return (token) => (
                axios({
                    method: 'post',
                    url: `${API_URL}/${endpoint}/`,
                    headers: { 'Content-Type': 'application/json' },
                    data: { token },
                    timeout: API_TIMEOUT
                })
            )

        default:
            return null;

    }

}

export default request;