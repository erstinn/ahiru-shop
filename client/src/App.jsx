import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Theme, GlobalStyle} from './styles/Theme.jsx'
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";


//`Routes` = ahiru.com/ -> the / route
// or ahiru.com/settings -> the /settings route
function App() {
  return (
      <BrowserRouter>
          <Theme>
              <GlobalStyle />
              <Navbar />
            <Routes>
                  <Route path='/' element={<Dashboard />} />
                  {/*<Route path='/' element={<Dashboard />} />*/}
            </Routes>
          </Theme>

      </BrowserRouter>
  )
}

export default App
