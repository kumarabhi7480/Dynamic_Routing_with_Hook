import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Cart = (data) => {
console.log(data.data);
    return (
        <div className='blog'>
<h2>Product Name :-  
<Link to={`/products-details/${data.data.id}`} >
{data.data.title}
</Link>
</h2>
<h3>
    <img src={data.data.thumbnail} alt={data.thumbnail} />
</h3>
{
    data.data.images.map((item)=>{
       return(
        <span key={item} >
        <img src={item} alt="" />
    </span>
       )
    })
}
<h3>Product brand :-{data.data.brand} </h3>
<h3>Product Description :- {data.data.description}</h3>
<h3>Product Discount :-{data.data.discountPercentage} </h3>
<h4>Product Rating :- {data.data.rating} </h4>
<h4>Product Stock in Store:- {data.data.stock} </h4>
        </div>
    );
};

export default Cart;