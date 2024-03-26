import React, {useContext, useEffect, useState} from 'react';
import {StyledSettingHeader, StyledSettingsInput} from "./Settings.styled.js";
import {GetUser} from "../../hooks/user.jsx";
import {useParams} from "react-router-dom";
import {LocaleContext} from "../../hooks/LocaleContext.js";

const GeneralSettings = () => {
   const {prefLanguage, setPrefLanguage, lang} = useContext(LocaleContext);
   const locale = lang[prefLanguage];
    const [user, setUserInfo] = useState([])
    const params = useParams();
    const userInfo = GetUser(params.id);

    useEffect(() => {
        setUserInfo(userInfo);
    }, []);

    // console.log('user',user)
    // console.log('user',params.id)
    return (
        <div>
            <StyledSettingHeader>Profile Settings</StyledSettingHeader>
            <label htmlFor=""> <h4>{locale.username}</h4></label>
            <StyledSettingsInput type="text" id="username" name="username" />

            <h4>{locale.email}</h4>
            <StyledSettingsInput type="text" id="username" name="username"/>

            <StyledSettingHeader>User Details</StyledSettingHeader>
            <h4>{locale.firstName}</h4>
            <StyledSettingsInput type="text" id="firstname" name="firstname"/>

            <h4>{locale.lastName}</h4>
            <StyledSettingsInput type="text" id="lastname" name="lastname"/>

        </div>
    );
};

export default GeneralSettings;
