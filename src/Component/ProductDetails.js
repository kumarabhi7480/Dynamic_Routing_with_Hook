import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
const ProductDetails = () => {
    let {productid} = useParams();
    const [productDetails,setProductDetails] = useState({})
//console.log(params);
    const GetDataProducts = async ()=>{
let req = await axios(`https://dummyjson.com/products/${productid}`);
//console.log(req.data);
setProductDetails(req.data);
console.log(productDetails);
}
useEffect(()=>{
    GetDataProducts();
//eslint-disable-next-line
     },[])  
    return (
        <div className='productDetails'>
                    <h1>Product Name:- {productDetails.title}</h1>
            <h2>Product brand:- {productDetails.brand}</h2> 
            <h2>Product category:- {productDetails.category}</h2> 
            <h2>Product rating:- {productDetails.rating}</h2> 
            <h2>Product price:- {productDetails.price}</h2> 
            <h2>Product discountPercentage:- {productDetails.discountPercentage}</h2> 

            <h2>Product description:- {productDetails.description}</h2> 

            <img src={productDetails.thumbnail} alt={productDetails.thumbnail} />
        <div className='productImage'>
            {
                 productDetails.images && productDetails.images.length > 0 ? productDetails.images.map((item)=>{
                    return(
                        <img src={item} alt ={item} key={item} />
                    )
                }) : ''
            }
        </div>
</div>            
    )
}

export default ProductDetails;