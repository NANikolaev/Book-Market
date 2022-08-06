import "./ErrorBox.css"
import { useState, useEffect } from "react";
import { Modal, ModalBody, Button, ModalFooter, ModalHeader } from "reactstrap";

function ErrorBox({ errors }) {
    let [show, setShow] = useState(false)
    useEffect(() => {
        if (errors.length > 0) {
            setShow(!show)
        }
    }, [errors])


    return (
        <div>
            <Modal isOpen={show} centered={true}>
                <ModalHeader>
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Error
                </ModalHeader>
                <ModalBody >
                    {errors.map(x => <p key={errors.indexOf(x)}><i  className="fa fa-times" aria-hidden="true"></i>{x}!</p>)}
                </ModalBody>
                <ModalFooter>
                    <Button className="close-errors" onClick={() => setShow(!show)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

export default ErrorBox