import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Typingmaster from './Typingmaster';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<>  <Header /> <Home /> </>} />
        <Route path='/Typingmaster' element ={<Typingmaster />} />
      </Routes>
    </Router>
  );
};

export default App;
