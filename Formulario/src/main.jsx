import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import BetterPeopleApi from './BetterPeopleAPI'
import './index.css'
import Nav from './componentes/Nav/Nav'
// import Filtrar from './componentes/Filtrar/Filtrar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path ="/App" element={<App />}/>
      <Route path ="/BetterPeopleApi" element={<BetterPeopleApi />}/>
      {/* <Route path ="/filtrar" element={<Filtrar/>}/> */}
    </Routes>
  </BrowserRouter>
)
