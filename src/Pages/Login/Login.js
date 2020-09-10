import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import history from '../../history';

const Login = () => {
  const onSumit = (values) => {
    const data = { ...values };
    history.push('/home')
  };

  return (
    <main>
      <div className="bg_color_2">
        <div className="container margin_60_35">
          <div id="login-2">
            <h1>Login Form</h1>
            <form>
              <div className="box_form clearfix">
                <Formik
                  initialValues={{ email: '', password: '' }}
                  onSubmit={onSumit}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Please Enter Valid Email').required('Email is Required'),
                    password: Yup.string().min(6,'The password must be at least six characters').required('Password Is Required'),
                  })}
                  render={({
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    errors,
                    touched,
                  }) => (
                      <div className="box_login last">
                        <div className="form-group">
                          <input
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                          <small className="form-text text-danger">
                            {errors.email && touched.email
                              ? errors.email
                              : null}
                          </small>
                        </div>
                        <div className="form-group">
                          <input
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                          />
                          <small className="form-text text-danger">
                            {errors.password && touched.password
                              ? errors.password
                              : null}
                          </small>
                          {' '}

                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            style={{
                              marginLeft: '0px',
                            }}
                            title="Login"
                            onClick={handleSubmit}
                            className="btn_1"
                          >
                            Login
                        </button>
                        </div>
                      </div>
                    )}
                />
              </div>
            </form>
            <p className="text-center link_bright">
              You Don't Have account ?
              {' '}
              <Link to="/register">
                <strong>Register</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Login };
