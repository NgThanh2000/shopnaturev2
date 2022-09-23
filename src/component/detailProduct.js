import React from 'react';
// import ImageGallery from 'react-image-gallery';
import {useParams} from "react-router-dom"
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Rating from '@mui/material/Rating';
import { actAddToCart } from '../actions/actions';
import Description from '../component/sub_detailProduct/description';
import Info from '../component/sub_detailProduct/info';
import Review from '../component/sub_detailProduct/review';

import SocialIcon from './socialIcon';
import Label from '../acsses/img/label.png'
function DetailProduct(props){
    // console.log(props.finishDaTaWoo)
    
    const {name} = useParams();
    const data = props.finishDaTaWoo;
    const thisProduct = data.find(getid => getid.name === name)
    // const img = thisProduct.images.map(img => img.src)
    // const i2 = img.src
    console.log(thisProduct)
    return(
        <div className='detail_product'>
            <div className='in_detailproduct'>
                <div className='product_detail'>
                    <div className='left'>
                        {/* <ImageGallery items={img}/> */}
                        <img src={thisProduct.images.map((img)=>(img.src))} alt={thisProduct.slug}/>
                    </div>
                    <div className='right'>
                        <h2>{thisProduct.name}</h2>
                        <h2>${thisProduct.price}</h2>
                        <Rating className='reat' name="reat" defaultValue={thisProduct.average_rating} size="large" readOnly precision={0.5} />
                        <p id='des' dangerouslySetInnerHTML={{ __html:thisProduct.short_description}}></p>
                        <button  onClick={()=>props.addtocart(thisProduct)}>ADD TO CARD</button>
                        <p><span>SKU:</span> {thisProduct.sku}</p>
                        <p><span>Categories: </span>{thisProduct.categories.map((cat,i)=>(
                            <span key={i} id='categories'>{cat.name},</span>
                        ))}</p>
                        <div className='tag'>
                            <p><span>Tags:</span> {thisProduct.tags.map((tag,i)=>(
                                <span key={i} id='categories'>
                                    {tag.name}
                                    {/* <img src={Label} alt='tag'/> */}
                                </span>
                            ))}</p>  
                        </div>                                   
                        <p><span>Share:</span>{<SocialIcon/>} </p>
                    </div>                 
                </div>                       
            </div>
            <div className='sub_detailProduct'>
                <div className='in_sub_detailProduct'>
                    <Tabs>
                        <TabList>
                            <Tab>DESCRIPTION</Tab>
                            <Tab>ADDITIONAL INFO</Tab>
                            <Tab>REVIEWS 
                                <div className='reviewcon'>
                                    <p>{thisProduct.rating_count}</p>
                                </div>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Description thisProduct={thisProduct}/>
                        </TabPanel>
                        <TabPanel>
                            <Info thisProduct={thisProduct}/>
                        </TabPanel>
                        <TabPanel>
                            <Review thisProduct={thisProduct}/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div> 
        </div>
    )
}

const mapDispatchToProps= (dispatch) =>{
    return{
        // dispatchWooProduct:(data) =>{
        //     dispatch(actGetDaTaWoo(data))
        // }
        addtocart:(item) =>{
            dispatch(actAddToCart(item))
        }
    }
}
const mapStateToProps= (state) =>{
    // console.log(state);
    return{
        finishDaTaWoo:state.finishDaTaWoo
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailProduct);
