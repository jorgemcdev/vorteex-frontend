import * as Yup from 'yup';

import api from '../../../api';

const Schema = Yup.object().shape({
  template: Yup
    .string()
    .required('Required'),
  name: Yup
    .string()
    .required('Required')
    .test('name', 'Name is in Use', async (value) => {
      let res;
      try {
        res = await api.instances.getInstances(null, `?name=${value}`);
      } catch (e) {
        return false;
      }
      return res.data.length === 0 && true;
    }),
  codename: Yup
    .string()
    .required('Required')
    .test('codename', 'Code Name is in Use', async (value) => {
      let res;
      try {
        res = await api.instances.getInstances(null, `?codename=${value}`);
      } catch (e) {
        return false;
      }
      return res.data.length === 0 && true;
    }),
  description: Yup
    .string()
    .required('Required'),
  group: Yup
    .string()
    .required('Required')
});

export default Schema;
