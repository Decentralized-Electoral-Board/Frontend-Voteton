import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GetStarted from './pages/GetStarted';
import LandingPage from './pages/LandingPage';
import Vote from './pages/Vote';
import Create from './pages/Create';
import Join from './pages/Join';
import Success from './components/Success';






function App() {

  return (


    <Router>
      <Routes>
        <Route path="/" element={<GetStarted/>} />
        <Route path="/homepage" element={<LandingPage/>} />
        <Route path="/homepage/create" element={<Create/>} />
        {/* <Route path="/homepage/create/success" element={<Success/>} /> */}
        <Route path="/homepage/vote" element={<Vote/>} />
        <Route path="/homepage/join" element={<Join />} />

      </Routes>
    </Router>
  )
}

        

export default App
