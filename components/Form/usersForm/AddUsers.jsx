import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import axios from 'axios';

const AddUser = (props) => {
    const { openUserForm, setOpenUserForm } = props;

    const HideUserForm = () => {
        setOpenUserForm(false);
    };

    return (
        <>
            <Modal show={openUserForm} onHide={() => HideUserForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ name: '', username: '', email: '', password: '' }}
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
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                const saveUserInfo = await axios.post("https://jsonplaceholder.typicode.com/users", values);
                                console.log("saveUserInfo====", saveUserInfo);
                            } catch (error) {
                                console.log("error===", error);
                            }
                            setSubmitting(false); // Don't forget to stop the submitting state
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
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.name && touched.name && errors.name}
                                    </span>

                                </div>
                                <div className="input-group">
                                    <label htmlFor="username">User Name</label>
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

export default AddUser;