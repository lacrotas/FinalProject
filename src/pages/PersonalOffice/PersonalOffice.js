import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import TextInput from '../../components/shared/TextInput/TextInput';

import './PersonalOffice.scss';

function fillFields() {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') || '[]');
  const initialValues = [];
  initialValues.firstName = activeUser.firstName;
  initialValues.lastName = activeUser.lastName;
  initialValues.login = activeUser.login;
  initialValues.email = activeUser.email;
  initialValues.password = activeUser.password;
  initialValues.rang = activeUser.rang;
  initialValues.like = activeUser.like;
  initialValues.dislike = activeUser.dislike;
  return initialValues;
}

function saveUserData(values) {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') || '[]');
  const oldUsers = JSON.parse(localStorage.getItem('UsersData') || '[]');
  for (let i = 0; i < oldUsers.length; i++) {
    if (oldUsers[i].email === activeUser.email) {
      oldUsers[i].firstName = values.firstName;
      oldUsers[i].lastName = values.lastName;
      oldUsers[i].login = values.login;
      oldUsers[i].email = values.email;
      oldUsers[i].password = values.password;

      activeUser.firstName = values.firstName;
      activeUser.lastName = values.lastName;
      activeUser.login = values.login;
      activeUser.email = values.email;
      activeUser.password = values.password;
    }
  }
  localStorage.setItem('activeUser', JSON.stringify(activeUser));
  localStorage.setItem('UsersData', JSON.stringify(oldUsers));
}

const userData = fillFields();

const PersonalOffice = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Длина должна быть не более 15 символов')
      .required('Обязательное поле'),
    lastName: Yup.string()
      .max(20, 'Длина должна быть не более 20 символов')
      .required('Обязательное поле'),
    login: Yup.string()
      .max(15, 'Длина должна быть не более 15 символов')
      .required('Обязательное поле'),
    email: Yup.string().email('Данная почта не доступна').required('Обязательное поле'),
    password: Yup.string().min(6, 'Пароль не менее 6 символов').required('Обязательное поле'),
  });

  return (
    <Formik
      initialValues={{
        firstName: userData.firstName,
        lastName: userData.lastName,
        login: userData.login,
        email: userData.email,
        password: userData.password,
      }}
      validationSchema={validate}
      onSubmit={values => {
        saveUserData(values);
      }}
    >
      <div className="personalOffice">
        <div className="personalOffice__mainInfo">
          <div className="personalOffice__avatar">
            <Avatar
              className="personalOffice__image--avatar"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <label className="personalOffice__block--upload" htmlFor="contained-button-file">
              <DriveFolderUploadIcon className="personalOffice__button-upload" />
              <input
                className="personalOffice__input--disable"
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
            </label>
          </div>
          <div className="personalOffice__text--stats">
            <p>Ранг: {userData.rang}</p>
            <p>Похвал: {userData.like}</p>
            <p>Жалоб: {userData.dislike}</p>
          </div>
        </div>
        <Form className="personalOffice__form">
          <TextInput label="Имя" name="firstName" type="text" />
          <TextInput label="Фамилия" name="lastName" type="text" />
          <TextInput label="Логин" name="login" type="text" />
          <TextInput label="Почта" name="email" type="email" />
          <TextInput label="Пароль" name="password" type="password" />
          <button className="personalOffice__button--left" type="submit">
            Изменить данные
          </button>
        </Form>
      </div>
    </Formik>
  );
};
export default PersonalOffice;
