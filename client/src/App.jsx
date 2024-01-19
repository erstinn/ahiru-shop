import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Theme} from './styles/Theme.jsx'
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Animal from "./components/animals/Animal.jsx";
import {Layout, RegisterLayout, SettingsLayout} from "./components/Layout.jsx";
import PreferencesSettings from "./components/settings/PreferencesSettings.jsx";
import SecuritySettings from "./components/settings/SecuritySettings.jsx";
import GeneralSettings from "./components/settings/GeneralSettings.jsx";
import TransactionHistory from "./components/settings/TransactionHistory.jsx";
import Login from "./components/authentication/Login.jsx";
import Register from "./components/authentication/Register.jsx";


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

                  <Route path='settings' element={<SettingsLayout />} >
                      <Route index element={<GeneralSettings />} />
                      <Route path='preferences' element={<PreferencesSettings />} />
                      <Route path='security' element={<SecuritySettings />} />
                      <Route path='transactions' element={<TransactionHistory />} />
                   </Route>
                  <Route path='/login' element={<Login />} />
                  <Route path='/logout' element={<Dashboard />} />
                </Route>
                <Route path='register' element={<RegisterLayout />}> </Route>

            </Routes>
          </Theme>

      </BrowserRouter>
  )
}

export default App
