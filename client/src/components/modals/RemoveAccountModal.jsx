import React, {useContext} from 'react';
import {StyledModalContainer, StyledModalWrapper} from "./Modal.styled.js";
import {StyledCancelBtn, StyledDeleteBtn, StyledWarningText} from "../../styles/Globals.styled.js";
import {LocaleContext} from "../../hooks/LocaleContext.js";

//simply putting onClose on both onClicks
//when a parent and child both have same onClick function, clicking the child may cause to trigger both event handlers
//as the event bubbles up from target element **up to**
const RemoveAccountModal = ({onClose}) => {
    const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
    const locale = lang[prefLanguage];
    return (
        <StyledModalWrapper onClick={onClose}>
            <StyledModalContainer onClick={e => e.stopPropagation()}>
                <div className='modal-content'>
                    <StyledWarningText>Remove this payment method?</StyledWarningText>
                    Remove your linked GCash account
                </div>
                <div className='btn-container'>
                    <StyledCancelBtn onClick={onClose}>
                        {locale.cancel}
                    </StyledCancelBtn>
                    <StyledDeleteBtn>
                        {locale.delete}
                    </StyledDeleteBtn>

                </div>

            </StyledModalContainer>

        </StyledModalWrapper>
    );
};

export default RemoveAccountModal;