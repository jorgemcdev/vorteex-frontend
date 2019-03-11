import * as Yup from 'yup';

const Schema = Yup.object().shape({
  module: Yup
    .string()
    .required('Required'),
  name: Yup
    .string()
    .required('Required'),
  codename: Yup
    .string()
    .required('Required'),

  description: Yup
    .string()
    .required('Required'),
});

export default Schema;
