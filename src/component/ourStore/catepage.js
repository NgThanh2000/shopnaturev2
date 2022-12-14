import React from 'react';
import { useState,useEffect } from "react";
import { connect } from 'react-redux';
import Woocommerce from '../../query/woo';
import Rating from '@mui/material/Rating';
import {Link} from "react-router-dom";
import {actAddToCart } from '../../actions/actions';
function CatePage(props){
    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    const WooCommerce = new WooCommerceRestApi({
        url: 'https://72.arrowhitech.net/tn3/thanh_reactjs/ShopNature', // Your store URL
        consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5', // Your consumer key
        consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3', // Your consumer secret
        version: 'wc/v3' // WooCommerce WP REST API version
        });
    const [tag, st] = useState([]);
    const [category, setCategory,] = useState([]);
    // const [productCate, setProductCate] = useState([]);

    useEffect(() => {
        // Woocommerce.getProducts().then(function(response) {
        //     setOldProduct(response.data);
        // });
        WooCommerce.get("products/categories")
        .then((response) => {
            //  props.dispatchProduct(response.data)
            setCategory(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
        WooCommerce.get("products/tags")
        .then((response) => {
            //  props.dispatchProduct(response.data)
            st(response.data);

            })
            .catch((error) => {
                console.log(error.response.data);
            });
        WooCommerce.get("products")
        .then((response) => {
            //  props.dispatchProduct(response.data)
             setOldProduct(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);
   
    // const oldPo = props.finishDaTaWoo
    const [oldProduct, setOldProduct]=useState([])
    // const DloPro = [...new Set(oldPo.map((Po)=>(Po.name)))]
    // console.log(props.finishDaTaWoo);
    const handleCategory = (catename) =>{
        console.log(catename);
        const newProduct = oldProduct.filter((newProduct) =>{
            // const a= newProduct.categories.map(c=>c.id)
            // console.log(a)
            return newProduct.categories.map(c=>c.name).toString() === catename
        })
        setOldProduct(newProduct)
    };

    return (
        <div className='catepage'>
            <div className='cate_page-left'>
                <div className='list_cate'>
                    <h3>CATEGORIES</h3>
                    <ul>
                        {category.map((cateitem,i) => (
                            <li key={i} onClick={()=>handleCategory(cateitem.name)}>{cateitem.name}</li>
                        ))}
                    </ul>
                </div>
                <div className='list_tag list_cate'>
                    <h3>TAGS</h3>
                    {tag.map((tag,i)=>(
                        <div className='tag_button' key={i}>
                            <button>{tag.name}</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cate_page-right'>
                <div className='in_uoo'>
                    {oldProduct.map((value, i) =>(
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
            </div>
        </div>
    )
}
const mapDispatchToProps=(dispatch) =>{
    return{
        addtocart:(item) =>{
            dispatch(actAddToCart(item))
        }
    }
}
const mapStateToProps = (state) =>{
    return{
        finishDaTaWoo:state.finishDaTaWoo
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CatePage);