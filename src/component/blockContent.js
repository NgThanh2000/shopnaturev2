import React from 'react';
import imgBC from '../acsses/img/blockContent.jpg';
import { useState,useEffect } from "react";
function BlockContent(){

    const [value,setValue] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost/ShopNature/wp-json/wp/v2/banner',{
        }).then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setValue(data))
      },[]);
    return(
        <div className='blockContent'>
            <div className='in_blockContent'>
                <img src={imgBC} alt='bl'/>
                {value.map((value, i) =>(
                    <div key={i}>
                    {/* <img src={value.featured_image.thumbnail} alt='bl'/> */}
                    <div className='text_blockContent'>
                        <h1>{value.title}</h1>
                    </div>
                    </div>
                ))}
                {/* <img src={imgBC} alt='bl'/>
                <div className='text_blockContent'>
                    <h1>Nature <br/> Shop</h1>
                </div> */}
            </div>
        </div>
    )
}
export default BlockContent;