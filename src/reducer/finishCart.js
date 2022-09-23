import { ADD_TO_CART,
    VIEW_PRODUCT_IN_CART,
    GET_NUMBER_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_CART, } from "../actions/actions";
            
const initialState ={
    numberCart:0,
    Carts:[],
    product:[]
}
localStorage.setItem('Name', 'fefe');
const finishCart = (state=initialState ,action) =>{
    switch(action.type){
        case VIEW_PRODUCT_IN_CART:
            return{
                ...state,
                product:action.payload
            }
        case GET_NUMBER_CART:
            return{
                ...state
            }
        case ADD_TO_CART:
            console.log(action.payload)
            if(state.numberCart == 0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    image:action.payload.images[0].src,
                    price:action.payload.price,
                }
                state.Carts.push(cart)
                console.log(state.Carts)
            }
            else{
                let check = false
                state.Carts.map((item,i)=>{
                    if(item.id == action.payload.id){
                        state.Carts[i].quantity++
                        check=true
                    }
                })
                if(!check){
                    let _cart={
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.images[0].src,
                        price:action.payload.price,
                    }
                    state.Carts.push(_cart)
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++
            return{
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity
            if(quantity > 1){
                state.numberCart--
                state.Carts[action.payload].quantity--
            }
            return{
                ...state
            }
        case DELETE_CART:
            let _quantity = state.Carts[action.payload].quantity
            console.log(_quantity);
            return{
                ...state,
                numberCart:state.numberCart - _quantity,
                Carts:state.Carts.filter(item =>{
                    return item.id!==state.Carts[action.payload].id
                })
            }
        default:
            return state;
    }
}
export default finishCart;