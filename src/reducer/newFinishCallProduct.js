import { NEW_FINISH_CALL_PRODUCTS } from "../actions/actions";
// import newCallProduct from "../query/newCallProduct";
const initial = []

const newFinishCallProduct = (state= initial, action) =>{
    switch(action.type){
        case NEW_FINISH_CALL_PRODUCTS:
            return state = action.data
        default:
            return state 
    }
}
export default newFinishCallProduct;