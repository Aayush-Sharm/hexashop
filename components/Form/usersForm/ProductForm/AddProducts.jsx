import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import axios from 'axios';

const AddProducts = (props) => {
    const { openProductForm, setOpenProductForm } = props;

    const HideProductForm = () => {
        setOpenProductForm(false);
    };

    return (
        <>
            <Modal show={openProductForm} onHide={() => HideProductForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ productid: '', productname: ''}}
  
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
                                    <label htmlFor="productid">Product Id</label>
                                    <input
                                        type="text"
                                        name="productid"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.productid}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.productid && touched.productid && errors.productid}
                                    </span>

                                </div>
                                <div className="input-group">
                                    <label htmlFor="productname">Product Name</label>
                                    <input
                                        type="text"
                                        name="productname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.productname}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.productname && touched.productname && errors.productname}
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

export default AddProducts;