import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Theme, GlobalStyle} from './styles/Theme.jsx'
import Dashboard from "./components/Dashboard.jsx";
import Settings from "./components/settings/Settings.jsx";
import Animal from "./components/Animal.jsx";
import {Layout, SettingsLayout} from "./components/Layout.jsx";
import PreferencesSettings from "./components/settings/PreferencesSettings.jsx";
import SecuritySettings from "./components/settings/SecuritySettings.jsx";
import GeneralSettings from "./components/settings/GeneralSettings.jsx";
import TransactionHistory from "./components/settings/TransactionHistory.jsx";


//`Routes` = ahiru.com/ -> the / route
// or ahiru.com/settings -> the /settings route
function App() {
  return (
      <BrowserRouter>
          <Theme>
            <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/animals/:id' element={<Animal />} />
                  {/*<Route path='/settings' element={<Settings />} />*/}
                  <Route path='/settings' element={<SettingsLayout />} >
                      <Route path='/settings' element={<GeneralSettings />} />
                      <Route path='/settings/preferences' element={<PreferencesSettings />} />
                      <Route path='/settings/security' element={<SecuritySettings />} />
                      <Route path='/settings/transactions' element={<TransactionHistory />} />
                   </Route>
                  <Route path='/login' element={<Dashboard />} />
                  <Route path='/logout' element={<Dashboard />} />
                  {/*<Route path='/' element={<Dashboard />} />*/}
                </Route>
            </Routes>
          </Theme>

      </BrowserRouter>
  )
}

export default App
