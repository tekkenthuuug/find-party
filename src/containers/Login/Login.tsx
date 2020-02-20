import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import Form from '../../components/Form/Form';
import { IFormProps, Section, IBaseValidation } from '../../types/types';
import '../../components/Form/Form.scss';

// Importing validtion method
import { validateBase } from '../Register/Register';

const sections: Section[] = [
  {
    fields: [
      { placeholder: 'Username', name: 'username' },
      { placeholder: 'Password', name: 'password' }
    ]
  }
];

const Login: React.FC<IFormProps> = ({ user, setUser, location }) => {
  const formik = useFormik<IBaseValidation>({
    initialValues: {
      username: '',
      password: '',
      error: ''
    },
    validate: (values) => validateBase(values),
    onSubmit: (props, { setSubmitting, setValues }) => {
      const { username, password } = props;
      fetch('http://localhost:8000/api/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.id) {
            setUser({ id: data.id, username: data.username });
          } else if (data.error) {
            setSubmitting(false);
            setValues({ ...props, error: data.error });
          }
        })
        .catch(() => {
          setSubmitting(false);
        });
    }
  });

  if (user.id) {
    return <Redirect to={{ pathname: `/users/${user.id}`, state: { from: location } }} />;
  }

  return (
    <Form
      formik={formik}
      headTitle="Join your friends!"
      submitButtonText="Login"
      subTitle={
        <Fragment>
          Don't have an account yet?{' '}
          <Link to="/register">
            <span>Register!</span>
          </Link>
        </Fragment>
      }
      sections={sections}
    />
  );
};

export default React.memo(Login);
