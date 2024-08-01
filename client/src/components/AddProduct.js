import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = { name, description, price, imageUrl };

    axios.post('mern-product-catalog.vercel.app/products', product)
      .then(response => {
        console.log(response.data);
        navigate('/');  // Redirect to home after adding the product
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
      });
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Enter your product name' className='input'/>
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder='Give a small description about the product' className='input'></textarea>
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required  placeholder='Enter the price of the product' className='input'/>
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required placeholder='Make sure to enter the image address' className='input'/>
        </div>
        <button type="submit" className='add-btn'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
