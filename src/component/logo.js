import React from 'react';
import { useState,useEffect } from "react";
import {
    Link,
  } from "react-router-dom";
function Logo(){
    const [value,setValue] = useState([])
  
    useEffect(()=>{
        // fetch('http://localhost/ShopNature/wp-json/wp/v2/posts/1',{
        // fetch('http://localhost/ShopNature/wp-json/wp/v2/media',{
        fetch('http://localhost/ShopNature/wp-json/wp/v2/posts',{
        }).then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setValue(data))
      },[]);

    return(
        <div className='logo'>
            <Link to=''>
                {value.map((value, i) =>(
                    <div key={i} className='in_logo'>
                        <img src={value.page_logo_src} alt={value.title} />  
                    </div>                  
                ))} 
            </Link>         
        </div>
    )
}
export default Logo;