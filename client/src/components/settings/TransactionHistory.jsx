import React, {useContext} from 'react';
import {StyledSettingHeader} from "./Settings.styled.js";
import {LocaleContext} from "../../hooks/LocaleContext.js";

const TransactionHistory = () => {
   const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
   const locale = lang[prefLanguage];
    return (
        <div>
            <StyledSettingHeader>{locale.transactionSettings}</StyledSettingHeader>
        </div>
    );
};

export default TransactionHistory;

