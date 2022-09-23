export const MENU = 'MENU';
export const FINISH_CALL_API = 'FINISH_CALL_API';

export const PRODUCT = 'PRODUCT';
export const FINISH_CALL_PRODUCT = 'FINISH_CALL_PRODUCT';

export const NEW_PRODUCT = 'NEW_PRODUCT';
export const NEW_FINISH_CALL_PRODUCTS = 'NEW_FINISH_CALL_PRODUCTS';

export const DATA_WOO = 'DATA_WOO';

export const ADD_TO_CART= 'ADD_TO_CART';
export const VIEW_PRODUCT_IN_CART= 'VIEW_PRODUCT_IN_CART';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const DELETE_CART = 'DELETE_CART';
export const SEEN_TOTAL = 'SEEN_TOTAL';

export const SLIDER = 'SLIDER';
export const FINISH_SLIDER = 'FINISH_SLIDER';
// ?????????????????????????????????

export const actGetDaTaWoo =(data) =>{
    return{
        type: DATA_WOO,
        data
    }
}
export const actViewProductInCart =(payload)=>{
    return{
        type:VIEW_PRODUCT_IN_CART,
        payload
    }
}
export function actGetNumberCart(){
    return{
        type:GET_NUMBER_CART
    }
}
export const actAddToCart =(payload) =>{
    return{
        type:ADD_TO_CART,
        payload
    }
}
export function actIncreaseQuantity(payload){
    return{
        type:INCREASE_QUANTITY,
        payload
    }
}
export function actDecreaseQuantity(payload){
    return{
        type:DECREASE_QUANTITY,
        payload
    }
}
export function actDeleteCart(payload){
    return{
        type:DELETE_CART,
        payload
    }
}

export function actSeenTotal(payload){
    return{
        type:SEEN_TOTAL,
        payload
    }
}
// export const getMenu = (payload) =>{
//     return{
//         type: MENU,
//         payload
//     }
// }

// export const finishMenu= (payload) =>{
//     return{
//         type:FINISH_CALL_API,
//         payload
//     }
// }
// 
// export const actGetProduct =(payload) =>{
//     return{
//         type:PRODUCT,
//         payload
//     }
// }
// export const finishProduct = (payload) =>{
//     return{
//         type:FINISH_CALL_PRODUCT,
//         payload
//     }
// }
///
// export const actGetNewProduct = (payload) =>{ 
//     return{
//         type:NEW_PRODUCT,
//         payload
//     }
// }
// export const actNewCallProduct = (payload) =>{ 
//     return{
//         type:NEW_FINISH_CALL_PRODUCTS,
//         payload
//     }
// }

//

//
// export const slider = (payload) =>{
//     return{
//         type: SLIDER,
//         payload
//     }
// }
// export const finishSlider =(payload) =>{
//     return{
//         type: FINISH_SLIDER ,
//         payload 
//     }
// }

