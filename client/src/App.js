import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
        <span className='icon-container'>
          <span class="material-symbols-outlined">
            bolt
          </span>
          <span className='icon-text'>Sportio</span>
        </span>
        <Link to="/add">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
