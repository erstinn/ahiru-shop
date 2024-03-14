    import React from 'react';
    import {StyledCancelBtn, StyledConfirmBtn} from "../../styles/Globals.styled.js";

    const ConfirmModal = () => {
        return (
            <div>
                Confirm purchase?

                <div className='btn-container'>
                    <StyledCancelBtn>Cancel</StyledCancelBtn>
                    <StyledConfirmBtn>Confirm</StyledConfirmBtn>
                </div>
            </div>
        );
    };

    export default ConfirmModal;