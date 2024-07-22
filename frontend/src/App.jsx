import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditBooks from './pages/EditBooks';
import ShowBooks from './pages/ShowBooks';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      
    </Routes>
  );
};

export default App;
