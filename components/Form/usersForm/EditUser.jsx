import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';


const EditUser = (props) => {
    const { editUserForm, seteditUserForm } = props;

    const HideEditUserForm = () => {
        seteditUserForm(false);
    };

    return (
        <>
            <Modal show={editUserForm} onHide={() => HideEditUserForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            } if (!values.password) {
                                errors.password = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
                            ) {
                                errors.password = 'Invalid email password';
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
                                <div className="input-group">
                                    <label htmlFor="username">Name</label>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.username && touched.username && errors.username}
                                    </span>

                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone">User Name</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                    />
                                    <span style={{ color: "red" }}>
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
                                    <span style={{ color: "red" }}>
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
                                    <span style={{ color: "red" }}>
                                        {errors.password && touched.password && errors.password}
                                    </span>
                                </div>
                                <Modal.Footer>
                                    <div className='stack-btn'>
                                        <Button variant="secondary" type="reset">
                                            Reset
                                        </Button>
                                        <Button variant="primary" type='submit' disabled={isSubmitting}>
                                            Submit
                                        </Button>
                                    </div>
                                </Modal.Footer>
                            </form>
                        )}
                    </Formik>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default EditUser;