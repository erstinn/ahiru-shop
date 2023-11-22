import React, {useEffect, useState} from 'react';
import {
    StyledCancelInputBtn,
    StyledPaymentContainer,
    StyledPaymentMethodInput, StyledRadio,
    StyledWarningBtn
} from "./Settings.styled.js";
import {StyledInput} from "../../styles/Globals.styled.js";
import {createPortal} from "react-dom";
import DeleteAccountModal from "../modals/DeleteAccountModal.jsx";
import RemoveAccountModal from "../modals/RemoveAccountModal.jsx";


const SecuritySettings = () => {
    //UI State variables
    const [showDeleteAccountModal, setDeleteAccountModal] = useState(false);
    const [showDeletePaymentModal, setDeletePaymentModal] = useState(false);
    const [showAddPaymentInput, setAddPaymentInput] = useState(false);

    //Form state variables


    //Form functions
    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }


    const paymentMethods = ['GCash', 'PayPal', 'AhiruCard', 'DuckCard'];
    //map vs forEach, use map when rendering elements esp <option> since it has to have a key for every option

    useEffect(() => {
        fetch()
    }, []);

    return (
        <div>
            <h3>Security</h3>
            <h4>Password</h4>
            <StyledInput type="text" id="firstname" name="firstname"/>

            <h3>Linked billing accounts</h3>
            <StyledPaymentContainer>
                <div className='add-button'>
                    <img src="/assets/remove-50.png" className="btn-26" onClick={() => setDeletePaymentModal(true)} alt=""/>
                    {showDeletePaymentModal && createPortal(
                          <RemoveAccountModal onClose={() => setDeletePaymentModal(false)}/>,
                            document.body
                        )
                    }
                </div>
                <div className='details'>
                    <h4 className='account-title'>Gcash</h4>
                    <p> <b>Account No.: </b> 12355</p>
                </div>
            </StyledPaymentContainer>

            { !showAddPaymentInput &&
                <StyledPaymentContainer>
                    <div className='add-button'><img src="/assets/add-50.png" alt="" className='btn-26' onClick={() => setAddPaymentInput(true)}/></div>
                    <div className='add-title'> <h4> Add mode of payment</h4> </div>
                </StyledPaymentContainer>
            }
            { showAddPaymentInput &&
                <StyledPaymentMethodInput>

                    <form action="">
                        <label htmlFor="gcash">GCash</label>
                        <StyledRadio type="radio" id="gcash" name="options" value="GCash" ></StyledRadio>

                        <label htmlFor="paypal">PayPal</label>
                        <StyledRadio type="radio" id="paypal" name="options" value="PayPal" ></StyledRadio>

                        <label htmlFor="ahirucard">AhiruCard</label>
                        <StyledRadio type="radio" id="ahirucard" name="options" value="AhiruCard" />

                        <label htmlFor="duckcard">DuckCard</label>
                        <StyledRadio type="radio" id="duckcard" name="options" value="DuckCard" />
                    </form>



                    <label htmlFor="accountNo">Account No.:</label>
                    <StyledInput type="text" id="accountNo" name="accountNo"/>
                    <StyledCancelInputBtn onClick={() => setAddPaymentInput(false)}>Cancel</StyledCancelInputBtn>
                </StyledPaymentMethodInput>
                }
            <h4>Username</h4>
            
            
            <h3>Delete account</h3>
            <p className='warning'>Permanently delete your account and your details.</p>
            <StyledWarningBtn onClick={() => setDeleteAccountModal(true)}>
                Delete account
            </StyledWarningBtn>
            {showDeleteAccountModal && createPortal(
                    <DeleteAccountModal onClose={() => setDeleteAccountModal(false)} />,
                    document.body )
            }
        </div>
    );
};

export default SecuritySettings;
