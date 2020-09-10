import React from 'react';
import { Formik} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './Register.css';
import history from '../../history';

const Register = () => {
  const onSumit = (values) => {
    history.push('/home')
  };
  return (
    <main
      style={{
        textAlign: 'right',
      }}
    >
      <div className="bg_color_2">
        <div className="container margin_60_35">
          <div id="register">
            <h1>Register Form</h1>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <form>
                  <div className="box_form">
                    <Formik
                      initialValues={{
                        name: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        password: '',
                        confirmpassword: '',
                        gender_register: 'male',
                        uploadPhoto: '',
                        // uploadFiles: '',
                        check_2: false,
                      }}
                      onSubmit={onSumit}
                      validationSchema={Yup.object().shape({
                        name: Yup.string().required('First Name Is Required'),
                        lastname: Yup.string().required('Last Name Is Required'),
                        email: Yup.string()
                          .email('Please Enter Valid Email')
                          .required('Email Is Required'),
                        phone: Yup.number().required('Phone Number Is Required'),
                        password: Yup.string()
                          .min(6, 'The password must be at least six characters')
                          .required('Password Is Required'),
                        confirmpassword: Yup.string()
                          .test(
                            'passwords-match',
                            'Password does not match',
                            function (value) {
                              return this.parent.password === value;
                            },
                          )
                          .required('Password Is Required'),
                        gender_register: Yup.string(),
                        uploadPhoto: Yup.mixed().required('A photo is required'),
                        // uploadFiles: Yup.mixed()
                        //   .required('A files like :ID or Passport is required'),
                        check_2: Yup.boolean().required(),

                      })}
                      render={({
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        setFieldValue,
                        errors,
                        touched,
                        values,
                      }) => (
                          <div>
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="name"
                              />
                              <small className="form-text text-danger">
                                {errors.name && touched.name ? errors.name : null}
                              </small>
                            </div>
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="lastname"
                              />
                              <small className="form-text text-danger">
                                {errors.lastname && touched.lastname
                                  ? errors.lastname
                                  : null}
                              </small>
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="email"
                              />
                              <small className="form-text text-danger">
                                {errors.email && touched.email
                                  ? errors.email
                                  : null}
                              </small>
                            </div>
                            <div className="form-group">
                              <label>Phone Number</label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="phone"
                              />
                              <small className="form-text text-danger">
                                {errors.phone && touched.phone
                                  ? errors.phone
                                  : null}
                              </small>
                            </div>
                            <div className="form-group">
                              <label>Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <small className="form-text text-danger">
                                {errors.password && touched.password
                                  ? errors.password
                                  : null}
                              </small>
                            </div>
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder="Confirm Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <small className="form-text text-danger">
                                {errors.confirmpassword && touched.confirmpassword
                                  ? errors.confirmpassword
                                  : null}
                              </small>
                            </div>

                            <div className="form-group">
                              <label>Gender</label>
                              <select
                                className="form-control"
                                name="gender_register"
                                id="gender_register"
                                onBlur={handleBlur}
                                onChange={handleChange}
                              >
                                <option>
                                  male
                                </option>
                                <option>
                                  female
                                </option>
                              </select>
                              <small className="form-text text-danger">
                                {errors.gender_register && touched.gender_register
                                  ? errors.gender_register
                                  : null}
                              </small>
                            </div>

                            <div className="form-group">
                              <label for="Upload Photo">Upload Personal Photo</label>
                              <input type="file" className="form-control-file"
                                accept="image/*"
                                id="uploadPhoto"
                                name="uploadPhoto"
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <small className="form-text text-danger">
                                {errors.uploadPhoto && touched.uploadPhoto
                                  ? errors.uploadPhoto
                                  : null}
                              </small>
                            </div>


                            <div className="form-group">
                              <label for="Upload Files">Upload Files like : ID,Passport</label>
                              <input type="file" className="form-control-file"
                                multiple
                                id="uploadFiles"
                                name="uploadFiles"
                              />
                              <small className="form-text text-danger">
                                {errors.uploadFiles && touched.uploadFiles
                                  ? errors.uploadFiles
                                  : null}
                              </small>
                            </div>

                            <br />
                            <div className="form-group text-center add_top_30">
                              <button
                                className="btn_1"
                                type="submit"
                                onClick={handleSubmit}
                                style={{
                                  display: 'unset',
                                  padding: '5px 16px',
                                }}
                              >
                                Register
                            </button>
                            </div>
                          </div>
                        )}
                    />
                  </div>
                </form>
                <p className="text-center link_bright">
                  Have Account ?
                  {' '}
                  <Link
                    to="/">
                    <strong>Login</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export { Register };
