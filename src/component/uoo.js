import React from 'react';
import {
    Link,
  } from "react-router-dom";
import { useState,useEffect } from "react";
import { connect } from 'react-redux';
import { actGetDaTaWoo,actAddToCart } from '../actions/actions';
import Woocommerce from '../query/woo';
import Rating from '@mui/material/Rating';
// import UooProduct from './uooproduct'
function Uoo(props){
    //console.log(props.finishDaTaWoo)
    // console.log(Woocommerce.getCategories());
 
    const [product, setProducts] = useState([]);

    const [postPerPage, setPostPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    // const [isLoading, setLoading] = useState(true);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = product.slice(indexOfFirstPost, indexOfLastPost);

    console.log(currentPost);
    useEffect(() => {
        Woocommerce.getProducts().then(function(response) {
            setProducts(response.data);
            props.dispatchProduct(response.data);   
        });
    }, []);
    
    if(product.length>0){
    return(
        <div className='uoo'>
            <div className='in_uoo'>
                {currentPost.map((value, i) =>(
                    <div key={i} className='product_uoo'>
                        <Link to={`/${value.name}/${value.id}`}>
                            <img src={value.images[0].src} alt={value.slug}/> 
                            {/* <img src={value.images.map((img,i)=>(img.src))} alt={value.slug}/>  */}
                            <Rating name="reat" defaultValue={value.average_rating} size="small" readOnly precision={0.5} />
                            <h3>{value.name}</h3>
                            <p>$ {value.price}</p>
                        </Link>
                        <button onClick={()=>props.addtocart(value)}>ADD TO CARD</button>
                    </div>                  
                ))}           
            </div>
            <div className='divbtshowmore'>
                <button type="button" onClick={() => setPostPerPage(postPerPage + 5)} className="btnsm">SHOW MORE PRODUCT</button> 
            </div>               
        </div>
    )}
    return(
       <div className='loading'>
            <div className="lds-dual-ring"></div>
       </div>
    )
}
const mapDispatchToProps=(dispatch) =>{
    return{
        dispatchProduct:(data) => {
            dispatch(actGetDaTaWoo(data))
        },
        addtocart:(item) =>{
            dispatch(actAddToCart(item))
        }
    }
}
const mapStateToProps=(state) =>{
    // console.log(state);
    return{
        finishDaTaWoo:state.finishDaTaWoo
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Uoo);