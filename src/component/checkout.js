import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";

function CheckOut(props){

    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

    const WooCommerce = new WooCommerceRestApi({
    url: 'https://72.arrowhitech.net/tn3/thanh_reactjs/ShopNature', // Your store URL
    consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5', // Your consumer key
    consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
    });


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
        console.log(id)
    });

    // const [product_id, setProduct_id] = useState('');
    // const [quantityyy, setQuantity] = useState('');

    const [vba, setVba] = useState({});
        
    for( let v2 of props.items.Carts){
        const v3 = {
            product_id:v2.product_id,
            quantity:v2.quantity
        }
        console.log(v3);
        setVba(v3)
    }
    console.log(vba)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const urlOrder = 'http://localhost/ShopNature/wp-json/wc/v3/orders/';

    const data = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
          first_name: firstName,
          last_name: lastName,
          address_1: address,
          email: email,
          phone: phone
        },
        shipping: {
            first_name: firstName,
            last_name: lastName,
            address_1: address,
            email: email,
            phone: phone
        },
        line_items: [
          
        ]
      };

      data.line_items.push(...vba)
      console.log(data);

      const handelCdb= () =>{
        WooCommerce.post("orders", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      }
    return(
        <div className='CheckOut'>
            <div className="wrapper">
                <div className="containercheck">
                    <form action="checkout" onSubmit={handelCdb} >
                        <h1>
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

    
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     try{
    //         axios.post(urlOrder,null,{
    //             params: {
    //                 first_name:firstName,
    //                 last_name:lastName,
    //                 address_1:address,
    //                 email:email,
    //                 phone:phone,
    //                 product_id: id,
    //                 quantity: quantity,
    //                 // customer_id: props.cart.id_user
    //             }}).then(function (response) {
    //                 console.log(response.data);
    //             }, 
    //             function (error) {
    //                 console.log(error);
    //             })      
    //     }   
    //     catch(err){
    //         console.log('sai');
    //     }
    // }
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