import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import axios from 'axios';

const AddOrder = (props) => {
    const { openOrderForm, setOpenOrderForm } = props;

    const HideOrderForm = () => {
        setOpenOrderForm(false);
    };

    return (
        <>
            <Modal show={openOrderForm} onHide={() => HideOrderForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ id: '', title: '', }}
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
                            ) 
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                const saveOrderInfo = await axios.post("https://jsonplaceholder.typicode.com/Orders", values);
                                console.log("saveOrderInfo====", saveOrderInfo);
                            } catch (error) {
                                console.log("error===", error);
                            }
                            setSubmitting(false); 
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
                                    <label htmlFor="id">ID</label>
                                    <input
                                        type="text"
                                        name="id"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.id}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.id && touched.id && errors.id}
                                    </span>

                                </div>
                                <div className="input-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.title && touched.title && errors.title}
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

export default AddOrder;