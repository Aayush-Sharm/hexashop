import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const DeleteUser = (props) => {
    const { deleteUserForm, setdeleteUserForm } = props;

    const HideDeleteUserForm = () => {
        setdeleteUserForm(false);
    };

    return (
        <>
            <Modal centered show={deleteUserForm} onHide={() => HideDeleteUserForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>Are you sure??</p>
                        <Modal.Footer>
                            <div className='stack-btn'>
                                <Button variant="secondary" type="reset" onClick={() => HideDeleteUserForm()}>
                                    Cancle
                                </Button>
                                <Button variant="primary" type='submit'>
                                    Delete
                                </Button>
                            </div>
                        </Modal.Footer>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default DeleteUser;