// import { useState, useEffect} from "react";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost/ShopNature/',
  consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5',
  consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3',
  version: 'wc/v3',
  queryStringAuth: true
});
// import { NEW_CALL_PRODUCTS } from "../actions/actions";
// // console.log(WooCommerce)

function newCallProduct(){
  return(
  WooCommerce.get("products")
  .then(response => response.data)
  .then(response =>console.log(response.data))

  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => {console.log(error.response.data);})
 
  )
// const data=(dataa)=>{
//     return dataa
}
export default newCallProduct;


// function NewCallProduct() {
//   // const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   let fetchOrders = () => {
//     WooCommerce.get("products", {per_page: 'all',})
//       .then((response) => {
//         if (response.status === 200) {
//           const payload = response.data;

//           dispatch({
//             type:NEW_CALL_PRODUCTS,
//             payload
//           })
//         }
//       })
//       .catch((error) => {});
//   };

//   return(
//     <>
//       {JSON.stringify(orders)}
//     </>
//   )
// }
// export default NewCallProduct