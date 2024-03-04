import React, { useEffect, createContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Theme} from './styles/Theme.jsx';
import translation from './locales/translation.json';
import { useState } from 'react';
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Animal from "./components/animals/Animal.jsx";
import {Layout, RegisterLayout, SettingsLayout} from "./components/Layout.jsx";
import PreferencesSettings from "./components/settings/PreferencesSettings.jsx";
import SecuritySettings from "./components/settings/SecuritySettings.jsx";
import GeneralSettings from "./components/settings/GeneralSettings.jsx";
import TransactionHistory from "./components/settings/TransactionHistory.jsx";
import Login from "./components/authentication/Login.jsx";
import { GetUser } from './hooks/user.jsx';
import Register from "./components/authentication/Register.jsx";


//`Routes` = ahiru.com/ -> the / route
// or ahiru.com/settings -> the /settings route
function App() {

  // const [language, setLanguage] = useState("en"); // State for selected language
  // const currentLanguage = translation[language];

  const LocaleContext = createContext(null);
  const [language, setLanguage] = useState("en") //todo when auth is implemented fetch user's pref and set as state
  

  // console.log(GetUser('65de03ad8fb0d98ee0f42add'))
  GetUser('65de03ad8fb0d98ee0f42ae1').then(user => {
    // console.log(user._id, user, user['preferences']['language'], user['preferences']['theme']); //todo jwt and stuff for login to finish
    // TODO works but fix latency since error appears: Uncaught (in promise) TypeError: user.preferences is undefined
    setLanguage(user['preferences']['language'])

  });
  
  return (
      <BrowserRouter>
          <Theme>
            <LocaleContext.Provider value={language}>
              <Routes>
                  <Route element={<Layout />}>

                    <Route path='/' element={<Dashboard />} />
                    <Route path='/animals/:id' element={<Animal />} />

                    <Route path='settings' element={<SettingsLayout />} >
                        <Route index element={<GeneralSettings />} />
                        <Route path='preferences' element={<PreferencesSettings />} />
                        <Route path='security' element={<SecuritySettings />} />
                        <Route path='transactions'  element={<TransactionHistory/>} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Dashboard />} />
                    
                  </Route>
                  {/* <Route path='register' element={<RegisterLayout />}> </Route> */}
              </Routes>
            </LocaleContext.Provider>
          </Theme>

      </BrowserRouter>
  )
}

export default App
