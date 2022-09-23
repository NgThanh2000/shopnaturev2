import { combineReducers } from "redux";

import finishMenu from "./finishMenu";
import finishCallProduct from "./finishCallProduct";
import newFinishCallProduct from "./newFinishCallProduct";
import finishDaTaWoo from "./finishDaTaWoo";
import finishCart from "./finishCart";
// import seenTotal from "./seenTotal";
// import reducerfinishSlider from "./finishSlider";

export default combineReducers({
    finishDaTaWoo,
    finishMenu,
    finishCallProduct,
    newFinishCallProduct,
    finishCart,
    // seenTotal
    // reducerfinishSlider,
   
})


