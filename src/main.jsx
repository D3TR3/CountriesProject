import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/home-page/HomePage.jsx'
import Countries from './pages/countries/Countries.jsx'
import Country from './pages/countries/country/Country.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route index path='/home' element={<HomePage />} />
    </Routes>
    <Route>
      <Route index path='/countries' element={<Countries />} />
      <Route path=':countrycode' element={<Country />} />
    </Route>    
  </BrowserRouter>,
)
