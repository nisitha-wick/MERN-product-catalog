import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('mern-product-catalog.vercel.app/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products!', error));
  }, []);

  return (
    <div>
      <h1 className='title'>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="details">
              <h2 className='product-name'>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </h2>
              <p className='product-price'>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
