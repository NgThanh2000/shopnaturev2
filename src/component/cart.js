import React from 'react';
import { connect } from 'react-redux';
import { useEffect,useState } from 'react';
import {actIncreaseQuantity,actDecreaseQuantity,actDeleteCart,actSeenTotal} from '../actions/actions';
import error from '../acsses/img/error.png'
import {Link,} from "react-router-dom";

function Cart({items,actIncreaseQuantity,actDecreaseQuantity,actDeleteCart,actSeenTotal}){

    // const [itemss,setValue] = useState([items])

    // useEffect(() =>{
    //     localStorage.setItem('lcs', JSON.stringify(items));
    //     const itemLocalStore = JSON.parse(localStorage.getItem('localStore'))
    //     console.log(itemLocalStore);
    // },[items])

    // const [data, setData] = useState([]);

    let ListCart = [];
    let TotalCart= 0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity*items.Carts[item].price;
        ListCart.push(items.Carts[item]);
        console.log(ListCart)
    });

    function TotalPrice(price, tcost){
        return Number(price*tcost).toLocaleString('en-US')
    }

    useEffect(() => {
        actSeenTotal(ListCart)
    }, []);

    return(
        <div className='cart'>
            <div className='in_cart'>
                <div className='subtotal'>
                    <table className='table_subtotal'>
                        <thead>
                            <tr>
                                <th colSpan='3'>Product</th>
                                <th colSpan='1'>Quantity</th>
                                <th colSpan='1'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ListCart.map((item,i)=>(
                                <tr key={i} >
                                    <td className='product-remove' onClick={()=>actDeleteCart(i)}>
                                        <img src={error} alt='close' id='close'/>
                                    </td>
                                    <td className='product-thumbnail'>
                                        <img src={item.image} alt={item.name}/>
                                    </td>
                                    <td className='product-name'>
                                        <span><a href='#q'>{item.name}</a></span>
                                        <br/>
                                        <span>${item.price}</span>
                                    </td>
                                    <td className='product-quantity'>
                                        <span className="tru" onClick={()=>actDecreaseQuantity(i)}>-</span>
                                        <span className="soluong">{item.quantity}</span>
                                        <span className="cong" onClick={()=>actIncreaseQuantity(i)}>+</span>
                                    </td>
                                    <td className='product-subtotal'>
                                        ${TotalPrice(item.price,item.quantity)}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                {/* <td colSpan='6'>{Number(TotalCart)}</td> */}
                                <td>TotalCart {TotalCart}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='cart_totals '>
                    <div className='cart_totals-inner '>
                        <h3>CART TOTALS</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>${TotalCart}</td>
                                </tr>
                                <tr>
                                    <th>Shipping</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <label>Flat Rate: $10.00<input type='radio'></input></label>
                                            </li>
                                            <li>
                                                <label>Local Delivery: $5.00</label>
                                                <input type='radio'></input>
                                            </li>
                                            <li>
                                                <label>Free Shipping</label>
                                                <input type='radio'></input>
                                            </li>
                                        </ul>
                                        <p>Shipping to Vietnam</p>
                                    </td>                          
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>${TotalCart}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to='/checkout'><button>Proceed to checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items:state.finishCart 
    }
}
export default connect(mapStateToProps,
    {actIncreaseQuantity,
    actDecreaseQuantity,
    actDeleteCart,
    actSeenTotal,
})
(Cart);