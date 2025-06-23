import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Signup from './pages/signup/signup';
import Blog from './pages/Blog/Blog';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
