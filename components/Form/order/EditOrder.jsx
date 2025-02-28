import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';


const EditOrder = (props) => {
    const { editOrderForm, seteditOrderForm } = props;

    const HideEditOrderForm = () => {
        seteditOrderForm(false);
    };

    return (
        <>
            <Modal show={editOrderForm} onHide={() => HideEditOrderForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ id: '', title: '', }}
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
                                    <label htmlFor="id">Id</label>
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

export default EditOrder;