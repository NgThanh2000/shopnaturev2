import { FINISH_CALL_API} from '../actions/actions';

const finishMenu = (state=[],action) =>{
    switch(action.type){
        case FINISH_CALL_API:
            return state=action.payload
            // return {..'.state, payload: action.payload}
        default:
            return state
    }
}

export default finishMenu;