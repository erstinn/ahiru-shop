    import React from 'react';
    import {StyledCancelBtn, StyledConfirmBtn} from "../../styles/Globals.styled.js";

    const ConfirmModal = () => {
        return (
            <div>
                Confirm purchase?

                <StyledCancelBtn>Cancel</StyledCancelBtn>
                <StyledConfirmBtn>Confirm</StyledConfirmBtn>
            </div>
        );
    };

    export default ConfirmModal;