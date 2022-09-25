import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SignIn from './assets/Sign-in-page';
import Dashboard from './assets/Dashboard-page.js';
import Home from './assets/Home-page.js';
import PageNotFound from './assets/404-page';
function App() {
  return (
      <Router>
      <Routes>
      <Route path='/login' element={<SignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/404' element={<PageNotFound/>} />
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<div><meta http-equiv="Refresh" content="0; url='/404'" /></div>}/>
      </Routes>
      </Router>
  );
  }
    
  export default App;