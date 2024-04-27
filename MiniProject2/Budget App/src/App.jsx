import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/NavBar';
import StockTracker from './components/Stocks';
import Homepage from './components/Homepage';
import Calculator from './components/Calculator';



import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact Component={Homepage}/>
      <Route path='/stocktracker' Component={StockTracker} />
      <Route path='/cal' Component={Calculator} />
      </Routes>
    </Router>
  );
}

export default App;
