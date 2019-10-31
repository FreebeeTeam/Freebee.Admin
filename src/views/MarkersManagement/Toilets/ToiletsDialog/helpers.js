import * as yup from 'yup';

export const toiletValidationSchema = yup.object().shape({
  title: yup.string().required(),
  address: yup.string().required(),
  author: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.array().of(yup.number()).required(),
});
