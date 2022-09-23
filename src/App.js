import React from "react";
import Home from './component/home/home';
import Header from "./component/header";
import Footer from "./component/footer";
// import NewProduct from "./component/newProduct";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect} from 'react'
import Cart from './component/cart';
import CheckOut from './component/checkout';
import DetailProduct from './component/detailProduct';
import Scroll from "./component/scrollto";
import Nopage from './component/nopage';

import About from './component/ourStore/about';
import Product from './component/ourStore/product';
import CatePage from './component/ourStore/catepage';
import Whitlist from "./component/ourStore/whislist";
function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="ABOUT%20US" element={<About />} />
          <Route path="CATEGORIES" element={<CatePage />} />
          <Route path="PRODUCTS" element={<Product />} />
          <Route path="WISHLIST" element={<Whitlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Nopage />} />
          <Route path ="/:name/:id" element={<DetailProduct />}/>
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Scroll />
      <Footer />  
    </div>
  );
}
export default App;

