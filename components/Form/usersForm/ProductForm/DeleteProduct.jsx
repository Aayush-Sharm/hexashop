import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const DeleteUser = (props) => {
    const { deleteProductForm, setdeleteProductForm } = props;

    const HideDeleteProductForm = () => {
        setdeleteProductForm(false);
    };

    return (
        <>
            <Modal centered show={deleteProductForm} onHide={() => HideDeleteProductForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>Are you sure??</p>
                        <Modal.Footer>
                            <div className='stack-btn'>
                                <Button variant="secondary" type="reset" onClick={() => HideDeleteProductForm()}>
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