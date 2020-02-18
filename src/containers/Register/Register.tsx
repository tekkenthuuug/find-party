import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import TextInput from '../../components/TextInput/TextInput';
import './Register.scss';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

import { IFormProps as IRegisterProps } from '../../App';

interface IBaseValidation {
  username: string | null;
  password: string | null;
}

interface IFormik {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  city: string;
  country: string;
  error: string;
}

export const validateBase = ({ username, password }: IBaseValidation) => {
  const errors: IBaseValidation = {
    username: null,
    password: null
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

const Register: React.FC<IRegisterProps> = ({ user, setUser, location }) => {
  const formik = useFormik<IFormik>({
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
    <div className="register-container">
      <div className="register-box">
        <h1>Join us now!</h1>
        <p>
          Already registered?{' '}
          <Link to="/login">
            <span>Sign in!</span>
          </Link>
        </p>
        <form onSubmit={formik.handleSubmit} className="register-login-from">
          {formik.values.error ? <div className="form-error">Username is taken</div> : null}
          <h2>Login information</h2>
          <div className="input-section">
            <TextInput
              placeholder="Username"
              handleChange={formik.handleChange}
              name="username"
              error={formik.errors.username || null}
            />
            <TextInput
              placeholder="Password"
              handleChange={formik.handleChange}
              inputType="password"
              name="password"
              error={formik.errors.password || null}
            />
          </div>
          <h2>Location information</h2>
          <div className="input-section">
            <TextInput placeholder="Country" handleChange={formik.handleChange} name="country" />
            <TextInput placeholder="City" handleChange={formik.handleChange} name="city" />
          </div>
          <h2>Personal information</h2>
          <div className="input-section">
            <TextInput placeholder="First name" handleChange={formik.handleChange} name="firstName" />
            <TextInput placeholder="Last name" handleChange={formik.handleChange} name="lastName" />
          </div>
          <button className="submit-button" type="submit" disabled={formik.isSubmitting}>
            <span>Register</span>
            {formik.isSubmitting || formik.isValidating ? (
              <CachedRoundedIcon style={{ animation: 'spin 1s linear infinite' }} />
            ) : (
              <ArrowRightAltRoundedIcon />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Register);
