import { FINISH_CALL_PRODUCT } from "../actions/actions";

const initial = ([])

const finishCallProduct = (state = initial, action) => {
    switch(action.type){
        case FINISH_CALL_PRODUCT:
            return state = action.data
            // const payload = action
            // return {
            //     ...state,
            //     payload :payload
            // }
        default:
            return state 
    }
};
export default finishCallProduct;