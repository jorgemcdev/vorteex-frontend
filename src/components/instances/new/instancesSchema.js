import * as Yup from 'yup';

import api from '../../../api';
const e = api.endpoints;

const Schema = Yup.object().shape({
  module: Yup
    .string()
    .required('Required'),
  name: Yup
    .string()
    .required('Required')
    .test('name', 'Name is in Use', async (value) => {
      let res;
      try {
        res = await api.request.get(e.INSTANCES, null, `name=${value}`);
      } catch (error) {
        console.error(error);
        return false;
      }
      return res.data.length === 0 && true;
    }),
  codename: Yup
    .string()
    .required('Required')
    .test('codename', 'Codename is in Use', async (value) => {
      let res;
      try {
        res = await api.request.get(e.INSTANCES, null, `codename=${value}`);
      } catch (error) {
        return false;
      }
      return res.data.length === 0 && true;
    }),
  description: Yup
    .string()
    .required('Required'),
});

export default Schema;
