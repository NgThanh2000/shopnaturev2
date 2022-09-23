import React from 'react';
import a from '../acsses/img/search.png';
import b from '../acsses/img/user.png';
import c from '../acsses/img/heart.png';
import d from '../acsses/img/cart.png';
import e from '../acsses/img/menu.png';
import { connect } from 'react-redux';
import {Link,} from "react-router-dom";

import { useState} from 'react'

function MenuIcon(props){
    // console.log(props.finishDaTaWoo)
    let quantity =0
    let TotalCart=0
    Object.keys(props.items.Carts).forEach(function(item){
        TotalCart+=props.items.Carts[item].quantity*props.items.Carts[item].price;
        quantity=props.items.Carts[item].quantity
    });

    const[isOpen, setIsOpen]=useState(false);
    // 
    const[isOpenSearch, setIsOpenSearch]=useState(false);
    const [filterValue, setFilterValue] = useState([]);
    // console.log(filterValue)
    const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = props.finishDaTaWoo.filter((e) => {
    return e.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
    setFilterValue([]);
    } else {
    setFilterValue(filterArray);
    }
    };

    return(
        <div className='menuIcon socialicon'>
            <div className='sreach'
                onMouseEnter={() => setIsOpenSearch(true)}
                onMouseLeave={() => setIsOpenSearch(false)}
            >
                {isOpenSearch && <div className='open_search'>
                    <input
                        type="text"
                        placeholder='Find Product ?'
                        onChange={handleSearch}
                    />
                    {filterValue.length !== 0 ? null : <p></p>}
                    <div className="seach_productList">
                        {filterValue.length !== 0 &&
                        filterValue.map((e,i) => {
                            return <p>
                             <Link to={`/${e.name}/${e.id}`} key={i}>{e.name}</Link>
                            </p>
                        })}
                    </div>
                </div>}
                <img src={a} alt='search'/>
            </div>
            
            <img src={b} alt='user'/>
            <img src={c} alt='heart'/>
            <div className='mini_cart'   
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <Link to='/cart'>
                    <img src={d} alt='cart'/>
                    <span className='reviewcon mini_cartcon'>{props.numberCart}</span>
                </Link> 
                {isOpen && <div className='open_minicart'>
                    {TotalCart !== 0 ? 
                        <div className='is_minicart'>
                            <div className='show_minipro'>
                                {props.mini.map((minipro,i)=>(
                                    <Link key={i} to={`/${minipro.name}/${minipro.id}`}>
                                    <div className='minipro' >
                                        <img src={minipro.image} alt={minipro.name}/>
                                        <div>
                                            <span><a href='#q'>{minipro.name}</a></span>
                                            <br/>
                                            <span>{quantity} x </span>
                                            <span>${minipro.price}</span>
                                        </div>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                            <div className='button_mini'>
                                <h3>Total {TotalCart}</h3>
                                <button>
                                    <Link to='/cart'>View Cart</Link> 
                                </button>
                                <button>
                                    <Link to='/checkout'>CheckOut</Link> 
                                </button>
                            </div>
                        </div>
                    :
                    <div className='notthing'>
                        <h4>No products in the cart.</h4>
                    </div>
                    }
                </div>}
            </div>
            <img src={e} alt='menu'/>
        </div>
    )
}
    // const Itemggg = () => {
    //     return (
    //     <div className='item_menuicon'>
    //         <img src={b} alt='user'/>
    //         fhduigvwsvudiu
    //     </div>
    //     );
    // };

const mapStateToProps = (state) =>{
    return{
        items:state.finishCart,
        mini:state.finishCart.Carts,
        numberCart:state.finishCart.numberCart,
        finishDaTaWoo:state.finishDaTaWoo
    }
}
export default connect(mapStateToProps)(MenuIcon);