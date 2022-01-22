import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v1 as uuid } from 'uuid';
import TextInput from '../../../../../shared/TextInput/TextInput';

const Registration = ({ getUserInfo, toggleWindow, toggleState }) => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Длина должна быть не более 15 символов')
      .required('Обязательное поле'),
    lastName: Yup.string()
      .max(20, 'Длина должна быть не более 20 символов')
      .required('Обязательное поле'),
    email: Yup.string().email('Данная почта не доступна').required('Обязательное поле'),
    password: Yup.string().min(6, 'Пароль не менее 6 символов').required('Обязательное поле'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
      .required('Пароли должны совпадать'),
  });

  function checkEmail(values, oldUsers) {
    for (let i = 0; i < oldUsers.length; i++) {
      if (values.email === oldUsers[i].email) {
        return false;
      }
    }
    return true;
  }
  function authorization(values) {
    const oldUsers = JSON.parse(localStorage.getItem('UsersData') || '[]');
    let checkUser = false;
    for (let i = 0; i < oldUsers.length; i++) {
      if (values.email === oldUsers[i].email && values.password === oldUsers[i].password) {
        getUserInfo(oldUsers[i]);
        checkUser = true;
        toggleState();
      }
    }
    if (!checkUser) {
      alert('Неправильны пароль или почта');
    }
  }
  function registration(values) {
    const newId = uuid();
    const oldUsers = JSON.parse(localStorage.getItem('UsersData') || '[]');
    if (checkEmail(values, oldUsers)) {
      const newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        email: values.email,
        rang: 'Novice',
        like: 0,
        dislike: 0,
        id: newId,
      };
      oldUsers.push(newUser);
      localStorage.setItem('UsersData', JSON.stringify(oldUsers));
      authorization(values);
    } else {
      alert('На данный email уже есть аккаунт');
    }
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        registration(values);
      }}
    >
      <Form className="modal-window__form">
        <TextInput label="Имя" name="firstName" type="text" />
        <TextInput label="Фамилия" name="lastName" type="text" />
        <TextInput label="Почта" name="email" type="email" />
        <TextInput label="Пароль" name="password" type="password" />
        <TextInput label="Повторите пароль" name="confirmPassword" type="password" />

        <Button variant="outlined" type="submit">
          Зарегистрироваться
        </Button>
        <Button variant="outlined" onClick={toggleWindow}>
          Войти
        </Button>
      </Form>
    </Formik>
  );
};

Registration.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  toggleState: PropTypes.func.isRequired,
};

export default Registration;
