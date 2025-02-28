import { Formik } from 'formik';
import React from 'react';
import Modal from 'react-bootstrap/Modal';


const ViewUser = (props) => {
    const { viewUserForm, setviewUserForm, viewUserData } = props;

    const HideViewUserForm = () => {
        setviewUserForm(false);
    };

    return (
        <>
            <Modal show={viewUserForm} onHide={() => HideViewUserForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{ username: '', phone: '', email: '', password: '' }}

                    >
                        {({
                            handleChange,
                            handleBlur,
                        }) => (
                            <form className="login-form" >
                                <div className="input-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={viewUserData.name}
                                        disabled
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="username">User Name</label>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={viewUserData.username}
                                        disabled
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={viewUserData.email}
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

export default ViewUser;