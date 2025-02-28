import { Formik } from 'formik';
import React from 'react';
import Modal from 'react-bootstrap/Modal';


const ViewOrder = (props) => {
    const { viewOrderForm, setviewOrderForm, viewOrderData } = props;

    const HideViewOrderForm = () => {
        setviewOrderForm(false);
    };

    return (
        <>
            <Modal show={viewOrderForm} onHide={() => HideViewOrderForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>View Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{id: '', Title: '' }}

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
                                        value={viewOrderData.id}
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
                                        value={viewOrderData.title}
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

export default ViewOrder;