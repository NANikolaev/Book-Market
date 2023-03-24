import { StyledModal,StyledModalBody } from "./elements";

const Modal=({show,children})=>{
    
    return (
        <StyledModal show={show}>
            <StyledModalBody>
              {children}
            </StyledModalBody>
        </StyledModal>
    )

};

export default Modal