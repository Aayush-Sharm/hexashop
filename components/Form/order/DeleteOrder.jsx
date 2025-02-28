import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const DeleteOrder = (props) => {
    const { deleteOrderForm, setdeleteOrderForm } = props;

    const HideDeleteOrderForm = () => {
        setdeleteOrderForm(false);
    };

    return (
        <>
            <Modal centered show={deleteOrderForm} onHide={() => HideDeleteOrderForm()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>Are you sure??</p>
                        <Modal.Footer>
                            <div className='stack-btn'>
                                <Button variant="secondary" type="reset" onClick={() => HideDeleteOrderForm()}>
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

export default DeleteOrder;