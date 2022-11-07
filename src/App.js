import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './About';
import Service from './Component/Service';
import Product from './Component/Product'
import './App.css';
import ProductDetails from './Component/ProductDetails';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
    <Route>
    <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path='/product' element={<Product/>} ></Route>
        <Route path='/products-details/:productid' element={<ProductDetails />} ></Route>
</Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;