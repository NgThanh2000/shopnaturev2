import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";

function CheckOut(props){
    // console.log(props.mini.id)

    let id = '';
    let quantity =0
    let ListCart = [];
    let TotalCart= 0;
    Object.keys(props.items.Carts).forEach(function(item){
        TotalCart+=props.items.Carts[item].quantity*props.items.Carts[item].price;
        ListCart.push(props.items.Carts[item]);
        quantity=props.items.Carts[item].quantity
        id= props.items.Carts[item].id
        // console.log(id)
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const urlOrder = 'http://localhost/ShopNature/wp-json/wc/v3/orders/';

    const handleSubmit = (e) =>{
        e.preventDefault();
        try{
            axios.post(urlOrder,null,{
                params: {
                    first_name:firstName,
                    last_name:lastName,
                    address_1:address,
                    email:email,
                    phone:phone,
                    product_id: id,
                    quantity: quantity,
                    // customer_id: props.cart.id_user
                }}).then(function (response) {
                    console.log(response.data);
                }, 
                function (error) {
                    console.log(error);
                })      
        }   
        catch(err){
            console.log('sai');
        }
    }
    return(
        <div className='CheckOut'>
            <div className="wrapper">
                <div className="containercheck">
                    <form action="checkout" onSubmit={handleSubmit} >
                        <h1>
                            <i className="fas fa-shipping-fast"></i>
                            BILLING DETAILS
                        </h1>
                        <div className="name">
                            <div>
                                <label for="f-name">First Name</label>
                                <input type="text" name="f-name" onChange={e => setFirstName(e.target.value)}></input>
                            </div>
                            <div>
                                <label for="l-name">Last Name</label>
                                <input type="text" name="l-name"  onChange={e => setLastName(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="address">
                            <label for="name">Street address</label>
                            <input type="text" name="address" onChange={e => setAdress(e.target.value)}></input>
                        </div>
                        <div className="phone">        
                            <div>
                                <label for="phone">Phone</label>
                                <input type="number" name="phone" onChange={e => setPhone(e.target.value)} ></input>
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input type="email" name="email" onChange={e => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <button type="submit">PROCEED TO PAY</button>
                    </form>
                </div>
                <div className='proceed'>
          
                    {props.mini.map((minipro,i)=>(
                        <div key={i} >
                        <div className='minipro' >
                            {/* <img src={minipro.image} alt={minipro.name}/> */}
                            <div>
                                <span><a href='#q'>{minipro.name}</a></span>
                                <br/>
                                <span>{quantity} x </span>
                                <span>${minipro.price}</span>
                            </div>
                            
                        </div>
                        </div>
                    ))}
                </div>
                <h3>{TotalCart}</h3>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        // seenTotal:state.seenTotal,
        items:state.finishCart ,
        mini:state.finishCart.Carts,
    }
}
export default connect(mapStateToProps)(CheckOut);


        //   {/* <h1>
        //                 <i className="far fa-credit-card"></i> Payment Information
        //             </h1>
        //             <div className="cc-num">
        //                 <label for="card-num">Credit Card No.</label>
        //                 <input type="text" name="card-num"></input>
        //             </div>
        //             <div className="cc-info">
        //                 <div>
        //                     <label for="card-num">Exp</label>
        //                     <input type="text" name="expire"></input>
        //                 </div>
        //                 <div>
        //                     <label for="card-num">CCV</label>
        //                     <input type="text" name="security"></input>
        //                 </div>
        //             </div>
        //             <div className="btns">
        //                 <button>Purchase</button>
        //                 <button>Back to cart</button>
        //             </div> */}