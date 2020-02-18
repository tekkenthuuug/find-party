import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import TextInput from '../../components/TextInput/TextInput';
import { IFormProps as ILoginProps } from '../../App';
import { validateBase } from '../Register/Register';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import '../Register/Register.scss';

type Error = {
  details: string;
};

interface IFormik {
  username: string;
  password: string;
  error: Error | null;
}

const Login: React.FC<ILoginProps> = ({ user, setUser, location }) => {
  const formik = useFormik({
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
        <h1>Join your friends!</h1>
        <p>
          Don't have an account yet?{' '}
          <Link to="/register">
            <span>Register now!</span>
          </Link>
        </p>
        <form className="register-login-from" onSubmit={formik.handleSubmit}>
          {formik.values.error ? <div className="form-error">Couldn't find user</div> : null}
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
              name="password"
              error={formik.errors.password || null}
              inputType="password"
            />
          </div>
          <button className="submit-button" type="submit" disabled={formik.isSubmitting}>
            <span>Submit</span>
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

export default React.memo(Login);
