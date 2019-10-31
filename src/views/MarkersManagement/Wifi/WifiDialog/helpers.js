import * as yup from 'yup';

export const wifiValidationSchema = yup.object().shape({
  title: yup.string().required(),
  address: yup.string().required(),
  author: yup.string().required(),
  password: yup.string().min(8, 'Password must be at least 8 characters').nullable(),
  description: yup.string().nullable(),
  location: yup.array().of(yup.number()).required(),
});
