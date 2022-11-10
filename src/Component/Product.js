import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './Cart';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCategorie from './ProductCategorie';

const Product = () => {
    const [userProduct,setUserProduct] = useState([])
    const [userProductCat,setUserProductCat] = useState([])

    const [currentCat,setCurrentCat] = useState('smartphones');
    const [inputValue,setInputValue]= useState([currentCat])
   // const [dropDownData,setDropDownData] = useState(['tops'])
//console.log(currentCat);
    // const API_URL = 'https://dummyjson.com/products?limit=20'
    const fetchData = async()=>{
        const data = await axios(`https://dummyjson.com/products/category/${currentCat}`);
        const mydata = data.data.products;
        setUserProduct(mydata);
//console.log(mydata);
    }
    const fetcDataCat =async ()=>{
        const data = await axios('https://dummyjson.com/products/categories');
        //console.log(data.data);

        setUserProductCat(data.data);
        //console.log(userProductCat);

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let catValue = inputValue;
        if(userProductCat.indexOf(catValue) === -1){
            alert('This text is not in the category')
        }
        else{
setCurrentCat(catValue)
        }
        console.log('form submited');
    }
    // Drop dwon data select
    // const fetcDataCatDrop= async ()=>{
    //     const data = await axios('https://dummyjson.com/products/categories');
    //     setDropDownData(data.data);
    //    // console.log(data2);
    // }
     useEffect(()=>{
        fetchData();
        fetcDataCat();
       // fetcDataCatDrop();
        // eslint-disable-next-line
     },[])
     useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
     },[currentCat])
    return (
        <>
            <Container>
                <Row>
                    <Col sm={2}>
                        <ProductCategorie userProductCat={userProductCat}
                        setCurrentCat={setCurrentCat}
                        currentCat ={currentCat}/>
                        {/* <h4>Catagories :-</h4>
                    <ListGroup>
                        {
                            userProductCat && userProductCat.length > 0 ? userProductCat.map((item)=>{
                                return(
                                <ListGroup.Item key={item} onClick={()=>{setCurrentCat(item)}} className={item === currentCat ? 'active': ' '}>{item} </ListGroup.Item>

                                )
                            }) : " "
                        }
                 
                    </ListGroup> */}
                    </Col >
                 
                    <Col sm={10} >
                        <select value={currentCat} onChange={(e)=>{
                            setCurrentCat(e.target.value)
                        }} >
                            {
                                userProductCat && userProductCat.length > 0 ? userProductCat.map((item)=>{
                                    return(
                                        <option value={item} key={item}>{item} </option>
                                    )
                                }) : <option>No Item</option>
                            }
                        </select>
                        <div className="serach">
                            <form onSubmit={handleSubmit} >
                                <input type="text" value={inputValue} onChange={(e)=>{
                            setInputValue(e.target.value.toLowerCase())
                        }}/>
                                    <button type='submit'>Search Item</button>
                            </form>
                        </div>
                    {
                  userProduct && userProduct.length > 0 ? userProduct.map((item)=>{
                    return(
                    <Cart key={item.id} data={item} />
                    )
                  }) : "Data is Loding"
           }
                    </Col>
                </Row>
            </Container>
           
        </>
    );
};

export default Product;