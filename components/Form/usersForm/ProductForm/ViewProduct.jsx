import { Formik } from 'formik';
import React from 'react';
import Modal from 'react-bootstrap/Modal';


const ViewProduct = (props) => {
    const { viewProductForm, setviewProductForm, viewProductData } = props;

    const HideViewProductForm = () => {
        setviewProductForm(false);
    };

    return (
        <>
            <Modal show={viewProductForm} onHide={() => HideViewProductForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>View Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ productid: '', title: ''}}

                    >
                        {({
                            handleChange,
                            handleBlur,
                        }) => (
                            <form className="login-form" >
                                <div className="input-group">
                                    <label htmlFor="id">Id</label>
                                    <input
                                        type="text"
                                        name="id"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={viewProductData.id}
                                        disabled
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={viewProductData.title}
                                        disabled
                                    />
                                </div>
                            </form>
                        )}
                    </Formik>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default ViewProduct;