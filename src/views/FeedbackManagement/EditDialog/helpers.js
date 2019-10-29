import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  title: yup.string().required(),
  address: yup.string().required(),
  author: yup.string().required(),
  type: yup.number().required(),
  password: yup.string().min(8, 'Password must be at least 8 characters'),
  description: yup.string(),
  location: yup.array().of(yup.number()),
});
