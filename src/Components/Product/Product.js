import React from 'react';
import ReactModal from '../ReactModal/ReactModal';

const Product = (props) => {
    const {cartCount} = props;
    return (
        <div className='col-md-4'>
            <div

             className='card p-3 border '>
                <img className='w-50 m-auto' src={props.product.image} alt="" />
            <h1>{props.product.title.slice(0,10)}</h1>
            </div>
            <div className="d-flex justify-content-around">
            <button onClick={cartCount} className='btn btn-success'>Add to cart</button>
            <button className='btn btn-danger'>delete</button>
            {/* <button className='btn btn-success'>details</button> */}
            <ReactModal product={props.product}></ReactModal>
            </div>
        </div>
    );
};

export default Product;