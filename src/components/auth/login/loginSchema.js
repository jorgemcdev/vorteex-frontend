import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(4, 'Username must contain at least 4 characters')
    .required('Required'),
  password: Yup
    .string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
});

export default loginSchema;
