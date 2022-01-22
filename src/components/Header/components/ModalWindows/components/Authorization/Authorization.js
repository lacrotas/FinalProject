import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../../../shared/TextInput/TextInput';

const Authorization = ({ getUserInfo, toggleWindow, toggleState }) => {
  const validate = Yup.object({
    email: Yup.string().email('Такой почты не существует').required('Неверная почта или пароль'),
    password: Yup.string()
      .min(6, 'Неверная почта или пароль')
      .required('Неверная почта или пароль'),
  });

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

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        authorization(values);
      }}
    >
      <Form className="modal-window__form">
        <TextInput label="Почта" name="email" type="email" />
        <TextInput label="Пароль" name="password" type="password" />

        <Button variant="outlined" type="submit">
          Войти
        </Button>
        <Button className="modal-window__button--forgive" variant="text">
          Забыли пароль?
        </Button>
        <Button variant="outlined" onClick={toggleWindow}>
          Регистрация
        </Button>
      </Form>
    </Formik>
  );
};
Authorization.propTypes = {
  toggleWindow: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  toggleState: PropTypes.func.isRequired,
};
export default Authorization;
