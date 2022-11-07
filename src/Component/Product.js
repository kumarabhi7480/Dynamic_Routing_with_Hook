import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './Cart';
import '../App.css';
const Product = () => {
    const [userProduct,setUserProduct] = useState([])
    const API_URL = 'https://dummyjson.com/products?limit=20'
    const fetchData = async()=>{
        const data = await axios(API_URL);
        const mydata = data.data.products;
        setUserProduct(mydata);
//console.log(mydata);
    }
     useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
     },[])
    return (
        <>
           <h2>Product Page</h2>
           {
                  userProduct && userProduct.length > 0 ? userProduct.map((item)=>{
                    return(
                    <Cart key={item.id} data={item} />
                    )
                  }) : "Data is Loding"
           }
      
        </>
    );
};

export default Product;