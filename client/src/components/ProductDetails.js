import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://mern-product-catalog-api.vercel.app/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('There was an error fetching the product details!', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
    <h1>{product.name}</h1>
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p className='product-price'>Price: ${product.price}</p>
    </div>
    </>
  );
}

export default ProductDetails;
