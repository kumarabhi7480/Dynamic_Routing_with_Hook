import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductCategorie = ({userProductCat,setCurrentCat,currentCat}) => {

    return (
        <div>
               <h4>Catagories :-</h4>
                    <ListGroup>
                        {
                            userProductCat && userProductCat.length > 0 ? userProductCat.map((item)=>{
                                return(
                                <ListGroup.Item key={item} onClick={()=>{setCurrentCat(item)}} className={item === currentCat ? 'active': ' '}>{item} </ListGroup.Item>

                                )
                            }) : " "
                        }
                 
                    </ListGroup>
        </div>
    );
};

export default ProductCategorie;