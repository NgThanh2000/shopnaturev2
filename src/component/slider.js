import React from 'react';
import { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { connect } from 'react-redux';
// import {finishSlider} from '../actions/actions'

function Sliderr(props){
    //console.log(props.reducerfinishSlider)
    const [value,setValue] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost/ShopNature/wp-json/wp/v2/sliderfooter',{}).then(response => response.json())
        .then(data => setValue(data))
        // props.dispatchSlider();
      },[]);
  
     
      var settings = {
        nav: false,
        dots: false,
        nextArrow: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        dotClass: '.slick-dots',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    return(
        <div className='slider'>
            <div className='in_slider' >
                <Slider {...settings}>
                    {value.map((value, i) =>(
                        <div key={i} className='slider_img'>
                            <img src={value.featured_image.thumbnail} alt={value.title} />  
                        </div>                  
                    ))}   
                </Slider>
            </div>              
        </div>
    )
}
export default Sliderr;
// const mapDispatchToProps= (dispatch) =>{
//     return{
//         dispatchSlider: (data) =>{
//             dispatch(finishSlider(data))
//         }
//     }
// }
// const mapStateToProps= (state) =>{
//     return{
//         reducerfinishSlider: state.reducerfinishSlider
//     }
// }
// connect(mapStateToProps,mapDispatchToProps)

