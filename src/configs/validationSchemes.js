import * as yup from 'yup';

export const registrationSchema = yup.object({
  name: yup
    .string('Введите имя')
    .required('Введите свое имя'),
  email: yup
    .string('Введите email')
    .email('Email введен некорректно')
    .required('Email обязателен'),
  password: yup
    .string('Введите пароль')
    .min(4, 'Пароль должен быть минимум 4 символов длиной')
    .required('Введите пароль')
});

export const loginSchema = yup.object({
  email: yup
    .string('Введите email')
    .email('Email введен некорректно')
    .required('Email обязателен'),
  password: yup
    .string('Введите пароль')
    .min(4, 'Пароль должен быть минимум 4 символов длиной')
    .required('Введите пароль')
});

export const createBoxSchema = yup.object({
  name: yup
    .string('Введите имя коробки')
    .required('Введите имя коробки'),
  link: yup
    .string('Введите Идентификатор коробки')
    .min(6, 'Идентификатор должен быть минимум 6 символов длиной')
});
