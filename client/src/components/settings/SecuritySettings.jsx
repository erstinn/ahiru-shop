import React, {useContext, useEffect, useState} from 'react';
import {
    StyledCancelInputBtn,
    StyledSettingsInput,
    StyledPaymentContainer,
    StyledPaymentMethodInput, StyledRadio,
    StyledWarningBtn, StyledSettingHeader
} from "./Settings.styled.js";
import {createPortal} from "react-dom";
import DeleteAccountModal from "../modals/DeleteAccountModal.jsx";
import RemoveAccountModal from "../modals/RemoveAccountModal.jsx";
import {LocaleContext} from "../../hooks/LocaleContext.js";


const SecuritySettings = () => {
   const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
   const locale = lang[prefLanguage];
    //UI State variables
    const [showDeleteAccountModal, setDeleteAccountModal] = useState(false);
    const [showDeletePaymentModal, setDeletePaymentModal] = useState(false);
    const [showAddPaymentInput, setAddPaymentInput] = useState(false);

    //Form state variables


    //Form functions
    // const onSubmit = (event) => {
    //     if (event.key === 'Enter') {
    //         handleSubmit();
    //     }
    // }


    const paymentMethods = ['GCash', 'PayPal', 'AhiruCard', 'DuckCard'];
    //map vs forEach, use map when rendering elements esp <option> since it has to have a key for every option

    useEffect(() => {
        fetch()
    }, []);

    return (
        <div>
            <StyledSettingHeader>{locale.securitySettings}</StyledSettingHeader>
            <h4>{locale.password}</h4>
            <StyledSettingsInput type="text" id="firstname" name="firstname"/>

            <StyledSettingHeader>{locale.linkedAccounts}</StyledSettingHeader>
            <StyledPaymentContainer>
                <div className='add-button'>
                    <img src="/assets/icons/remove-50.png" className="btn-26" onClick={() => setDeletePaymentModal(true)} alt=""/>
                    {showDeletePaymentModal && createPortal(
                          <RemoveAccountModal onClose={() => setDeletePaymentModal(false)}/>,
                            document.body
                        )
                    }
                </div>
                <div className='details'>
                    <h4 className='account-title'>Gcash</h4>
                    <p> <b>{locale.accountInfo}: </b> 12355</p>
                {/*   sample, to delete ^*/}
                </div>
            </StyledPaymentContainer>

            { !showAddPaymentInput &&
                <StyledPaymentContainer>
                    <div className='add-button'><img src="/assets/icons/add-50.png" alt="" className='btn-26' onClick={() => setAddPaymentInput(true)}/></div>
                    <div className='add-title'> <h4>{locale.addPayment}</h4> </div>
                </StyledPaymentContainer>
            }
            { showAddPaymentInput &&
                <StyledPaymentMethodInput>

                    <form action="">
                        <label htmlFor="gcash">{locale.gcash}</label>
                        <StyledRadio type="radio" id="gcash" name="options" value="GCash" ></StyledRadio>

                        <label htmlFor="paypal">{locale.paypal}</label>
                        <StyledRadio type="radio" id="paypal" name="options" value="PayPal" ></StyledRadio>

                        <label htmlFor="ahirucard">{locale.ahirucard}</label>
                        <StyledRadio type="radio" id="ahirucard" name="options" value="AhiruCard" />

                        <label htmlFor="duckcard">{locale.duckcard}</label>
                        <StyledRadio type="radio" id="duckcard" name="options" value="DuckCard" />
                    </form>

                    <label htmlFor="accountNo">{locale.accountInfo}: </label>
                    <StyledSettingsInput type="text" id="accountNo" name="accountNo"/>
                    <StyledCancelInputBtn onClick={() => setAddPaymentInput(false)}>Cancel</StyledCancelInputBtn>
                </StyledPaymentMethodInput>
                }
            <h4>Username</h4>
            
            
            <StyledSettingHeader>{locale.deleteAcc}</StyledSettingHeader>
            <p className='warning'>{locale.deleteAccDesc}</p>
            <StyledWarningBtn onClick={() => setDeleteAccountModal(true)}>
               {locale.deleteAcc}
            </StyledWarningBtn>
            {showDeleteAccountModal && createPortal(
                    <DeleteAccountModal onClose={() => setDeleteAccountModal(false)} />,
                    document.body )
            }
        </div>
    );
};

export default SecuritySettings;
