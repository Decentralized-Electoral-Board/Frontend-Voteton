import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from "./pages/LandingPage"
import SuccessfulLanding from "./pages/SucessfulLanding"
import Homepage from './pages/Homepage';
import KYC from './pages/KYC';
import Profile from './pages/Profile';
import HomePageVerified from './pages/HomePageVerified';
import Vote from './pages/Vote';
import AdminSignIn from './Admin/AdminSignIn';
import CreateElection from './Admin/CreateElection';





function App() {

  return (


    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/welcome/successful" element={<SuccessfulLanding/>} />
        <Route path="/welcome/successful/home" element={<Homepage/>} />
        <Route path="/welcome/successful/home/KYC" element={<KYC/>} />
        <Route path="/welcome/successful/home/KYC/homepage" element={<HomePageVerified/>} />
        <Route path="/vote" element={<Vote/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin/signin" element={<AdminSignIn/>} />
        <Route path="/createElection" element={<CreateElection/>} />
      </Routes>
    </Router>
  )
}

export default App
