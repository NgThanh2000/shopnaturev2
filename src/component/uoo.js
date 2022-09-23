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
    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    const WooCommerce = new WooCommerceRestApi({
        url: 'https://72.arrowhitech.net/tn3/thanh_reactjs/ShopNature', // Your store URL
        consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5', // Your consumer key
        consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3', // Your consumer secret
        version: 'wc/v3' // WooCommerce WP REST API version
        });
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
        WooCommerce.get("products")
        .then((response) => {
             props.dispatchProduct(response.data)
             setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });

        // Woocommerce.getProducts().then(function(response) {
        //     setProducts(response.data);
        //     props.dispatchProduct(response.data);   
        // });
    }, []);
    
    // const handleAddCart = (value) =>{
    //     props.addtocart(value)
    //     alert('You have added a product to your cart')
    // }

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