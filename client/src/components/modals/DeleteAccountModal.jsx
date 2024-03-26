import React, {useContext} from 'react';
import {StyledCancelBtn, StyledDeleteBtn, StyledWarningText} from "../../styles/Globals.styled.js";
import {StyledModalContainer, StyledModalWrapper} from "./Modal.styled.js";
import {LocaleContext} from "../../hooks/LocaleContext.js";

const DeleteAccountModal = ({onClose}) => {
    const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
    const locale = lang[prefLanguage];
    return (
        <StyledModalWrapper onClick={onClose}>
            <StyledModalContainer onClick={e => e.stopPropagation()}>
                <div className='modal-content'>
                    <StyledWarningText>{locale.deleteAcc}</StyledWarningText>
                    {locale.deleteAccDesc}
                </div>
                <div className='btn-container'>
                    <StyledCancelBtn onClick={onClose}>{locale.cancel}</StyledCancelBtn>
                    <StyledDeleteBtn>{locale.confirm}</StyledDeleteBtn>
                </div>
            </StyledModalContainer>
        </StyledModalWrapper>
    );
};

export default DeleteAccountModal;