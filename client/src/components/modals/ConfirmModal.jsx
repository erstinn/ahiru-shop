    import React, {useContext} from 'react';
    import {StyledCancelBtn, StyledConfirmBtn} from "../../styles/Globals.styled.js";
    import {LocaleContext} from "../../hooks/LocaleContext.js";

    const ConfirmModal = () => {
       const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
       const locale = lang[prefLanguage];
        return (
            <div>
                Confirm purchase?

                <div className='btn-container'>
                    <StyledCancelBtn>{locale.cancel}</StyledCancelBtn>
                    <StyledConfirmBtn>{locale.confirm}</StyledConfirmBtn>
                </div>
            </div>
        );
    };

    export default ConfirmModal;