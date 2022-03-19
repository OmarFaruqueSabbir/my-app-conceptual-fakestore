import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = (props) => {
    const {cartCount} = props
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>All Products</h1>
            <div className="row container">
            {
                products.map(product => <Product cartCount={cartCount} key={product.id} product={product} ></Product>)
            }
            </div>

        </div>
    );
};

export default AllProducts;