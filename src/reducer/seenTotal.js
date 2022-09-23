import { SEEN_TOTAL } from "../actions/actions";

const initial = []

const seenTotal = (state = initial, action) => {
    switch(action.type){
        case SEEN_TOTAL:
            console.log(action)
            return state = action.data
        default:
            return state 
    }
};
export default seenTotal;