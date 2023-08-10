import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Theme, GlobalStyle} from './styles/Theme.jsx'
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Settings from "./components/Settings.jsx";
import Animal from "./components/Animal.jsx";


//`Routes` = ahiru.com/ -> the / route
// or ahiru.com/settings -> the /settings route
function App() {
  return (
      <BrowserRouter>
          <Theme>
            <GlobalStyle />
              <Navbar />
            <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/animals/:id' element={<Animal />} />
                  <Route path='/settings' element={<Settings />} />
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
