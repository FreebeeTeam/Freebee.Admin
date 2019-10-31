import * as yup from 'yup';

export const socketValidationSchema = yup.object().shape({
  title: yup.string().nullable(),
  address: yup.string().required(),
  author: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.array().of(yup.number()).required(),
});
