import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GetStarted from './pages/GetStarted';
import LandingPage from './pages/LandingPage';
import Create from './pages/Create';
import Join from './pages/Join';
import Success from './components/Success';
import Cat from './components/cat';
import SearchId from './pages/SearchId';
import Vote2 from './pages/Vote2';







function App() {

  return (


    <Router>
      <Routes>
        <Route path="/" element={<GetStarted/>} />
        <Route path="/homepage" element={<LandingPage/>} />
        <Route path="/homepage/create" element={<Create/>} />
        <Route path="/homepage/create/success" element={<Success/>} />
        <Route path="/homepage/searchId" element={<SearchId/>} />
        <Route path="/homepage/searchId/vote2" element={<Vote2/>} />
        <Route path="/homepage/join" element={<Join />} />
        <Route path="/homepage/join/cat" element={<Cat/>} />

      </Routes>
    </Router>
  )
}

        

export default App
