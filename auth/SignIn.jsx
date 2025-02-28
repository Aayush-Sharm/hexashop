import React from 'react';
import { Formik } from 'formik';
import { Link,  } from 'react-router-dom';
import { toast } from 'react-toastify';
const SignIn = () => {
    
    return(
        <div class="login-body">
        <div className="login-container">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                   
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                   
                    localStorage.setItem("user",JSON.stringify(values))
                    localStorage.setItem("token","qwerty12345")
                    toast.success("Login successfully")
                    
                    setTimeout(() => {
                        window.location.href= "/"
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
                        <h2>Login</h2>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span style={{color:"red"}}>
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
                            <span style={{color:"red"}}>
                                {errors.password && touched.password && errors.password}
                            </span>
                        </div>
                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </form>
                )}
            </Formik>
            <div className='redirect-form'>
            <span>Not have an account?<Link to="/sign-up">Sign up Here</Link></span>
        </div>
        </div>
    </div>
    )
};

export default SignIn;



