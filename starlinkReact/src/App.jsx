import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import ResidentialPage from './Components/Pages/ResidentialPage';
import RoamPage from './Components/Pages/RoamPage';
const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" />
        <Route index element={<HomePage />} />
        <Route path="/residentialpage" element={<ResidentialPage />} />
        <Route path="/roamPage" element={<RoamPage />} /> 
      </Route>
    </Routes>
  );
}

export default App
