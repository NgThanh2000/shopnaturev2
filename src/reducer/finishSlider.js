import { FINISH_SLIDER } from '../actions/actions';

const initial = [
    {
        "id":1,
        "naem":"caches",
    },
    {
        "id":2,
        "naem":"ewfef",
        
    }
]
const reducerfinishSlider = (state = initial, action) =>{
    // console.log(action);
    switch(action.type){
        case FINISH_SLIDER :
            return state = 'fmm'
        default:
            return 'asd'
    }
}

export default reducerfinishSlider;