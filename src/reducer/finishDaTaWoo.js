import {DATA_WOO} from "../actions/actions";


const finishDaTaWoo = (state =[], action) =>{
    switch(action.type){
        case DATA_WOO:
            // console.log(action.data)
            return state = action.data;
        default:
            // console.log('dmmm')
            return state;
    }
}
export default finishDaTaWoo;

