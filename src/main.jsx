import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/home-page/HomePage.jsx'
import Countries from './pages/countries/Countries.jsx'
import Country from './pages/countries/country/Country.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import { Navigate } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<App />} />
        <Route path='/not-found' element={<NotFound /> } />
        <Route index path='/home' element={<HomePage />} />
      </Route>
      <Route path='/countries'>
        <Route index  element={<Countries />} />
        <Route path=':countrySlug' element={<Country />} />
      </Route>

      <Route path='*' element={<Navigate to={"/not-found"} replace />} /> 
    </Routes>
    
  </BrowserRouter>,
)
