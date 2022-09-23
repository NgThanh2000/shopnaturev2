import React from 'react';
import { useState,useEffect } from "react";
import { connect } from 'react-redux';
import layder from '../acsses/img/layer.jpg'
import Sliderr from './slider';
import SocialIcon from './socialIcon'
function Footer(){
    const [value,setValue] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost/ShopNature/wp-json/wp/v2/footer/',{
        }).then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setValue(data))
      },[]);

    return(
        <div className='footer'>
            <Sliderr />
            <div >
                <img className='layder' src={layder} alt='layder'/>  
                <div className='menuF'>
                    <div className='copyright'>
                        <p>© Copyright  <span>CodexThemes</span></p>
                    </div>
                    <div className='menuFF'>
                        {value.map((value, i) =>(
                            <div key={i} className='menuFooter'>
                                <h2><a href='#/'>{value.post_title}</a></h2> 
                            </div>                  
                        ))}
                    </div>
                    <SocialIcon />
                </div>           
            </div>              
        </div>
    )
}
const mapDispatchToProps =(dispatch) =>{
    return{
        dispatchFooter:(data)=>{

        }
    }
}
const mapStateToProps = (state) =>{
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);