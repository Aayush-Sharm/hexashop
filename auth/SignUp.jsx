import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Stack } from 'react-bootstrap';

const SignUp = () => (
    <div className="login-body">
        <div className="login-container">
            <Formik
                initialValues={{ username: '', phone: '', email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (
                        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
                    ) {
                        errors.password = 'Password must be at least 8 characters long and include numbers and letters.';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            <span style={{ color: 'red' }}>
                                {errors.username && touched.username && errors.username}
                            </span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            <span style={{ color: 'red' }}>
                                {errors.phone && touched.phone && errors.phone}
                            </span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span style={{ color: 'red' }}>
                                {errors.email && touched.email && errors.email}
                            </span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <span style={{ color: 'red' }}>
                                {errors.password && touched.password && errors.password}
                            </span>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </form>
                )}
            </Formik>
            <div className="redirect-form">
                <span>
                    Not have an account?<Link to="/">Sign in Here</Link>
                </span>
            </div>
            <Stack direction="horizontal" gap={2} className="mt-3">
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </div>
    </div>
);

export default SignUp;
