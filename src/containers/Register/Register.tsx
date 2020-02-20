import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { IBaseValidation, IFormProps, Section } from '../../types/types';
import Form from '../../components/Form/Form';

export const validateBase = ({ username, password }: IBaseValidation) => {
  const errors: IBaseValidation = {
    username: '',
    password: ''
  };
  if (!username) {
    errors.username = 'Required field';
  } else if (username.length < 5) {
    errors.username = 'Length must be at least 5 characters';
  } else if (username.length > 24) {
    errors.username = 'Length must be 24 characters or less';
  } else {
    delete errors.username;
  }

  if (!password) {
    errors.password = 'Required field';
  } else if (password.length < 6) {
    errors.password = 'Length must be at least 6 characters';
  } else {
    delete errors.password;
  }

  return errors;
};

const sections: Section[] = [
  {
    title: 'Login information',
    fields: [
      { placeholder: 'Username', name: 'username' },
      { placeholder: 'Password', name: 'password' }
    ]
  },
  {
    title: 'Location information',
    fields: [
      { placeholder: 'Country', name: 'country' },
      { placeholder: 'City', name: 'city' }
    ]
  },
  {
    title: 'Personal information',
    fields: [
      { placeholder: 'First Name', name: 'firstName' },
      { placeholder: 'Last Name', name: 'lastName' }
    ]
  }
];

const Register: React.FC<IFormProps> = ({ user, setUser, location }) => {
  const formik = useFormik<IBaseValidation>({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      city: '',
      country: '',
      error: ''
    },
    validate: (values) => validateBase(values),
    onSubmit: (props, { setSubmitting, setValues }) => {
      const { username, country, city, password, firstName, lastName } = props;
      fetch('http://localhost:8000/api/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          country,
          city,
          firstName,
          lastName
        })
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.id) {
            setUser({ id: data.id, username: data.username });
          } else if (data.error) {
            setSubmitting(false);
            setValues({ ...props, error: data.error.details });
          }
        });
    }
  });

  if (user.id) {
    return <Redirect to={{ pathname: `/users/${user.id}`, state: { from: location } }} />;
  }

  return (
    <Form
      formik={formik}
      headTitle="Join us now!"
      submitButtonText="Register"
      subTitle={
        <Fragment>
          Already registered?{' '}
          <Link to="/login">
            <span>Sign in!</span>
          </Link>
        </Fragment>
      }
      sections={sections}
    />
  );
};

export default React.memo(Register);
