import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';
import RegForm from "./RegForm";
// require("react-bootstrap/ModalHeader");

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title>
                    Add Person
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* form  */}
                <RegForm />
                {/* form end */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
    );
}



export default MyVerticallyCenteredModal;