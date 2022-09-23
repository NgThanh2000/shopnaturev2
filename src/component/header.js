import React from 'react';
import Logo from "./logo";
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';

import SocialIcon from './socialIcon';
import MenuIcon from './menuIcon';

function Header(props){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/ShopNature/wp-json/wp/v2/menu',{}).then(response => response.json())
        .then(data => setValue(data))
        .then(value)
      },[]);
    return(
        <div className='header'>
            <div className='up_header'>
                <SocialIcon/>
                <Logo/>
                <MenuIcon/>
            </div>
            <div className='in_header'>
                {value.map((v, i)=>(
                    <Link to={`${v.post_title}`} key={i}>
                       <h4 key={i}>{v.post_title}</h4> 
                    </Link> 
                ))}
            </div>         
        </div>
    )
}
const mapDispatchToProps =( dispatch ) =>{
    return{
        // dispatchMenu:(data) =>{
        //     dispatch(getMenu(data))
        // }
    }
}
const mapStateToProps = (state) => {
    return{
        //vi data đổ vào finishMenu nên menu ko có data nó chỉ là bước trung gian 
        finish :state.finishMenu,
        menu: state.menu
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header); 