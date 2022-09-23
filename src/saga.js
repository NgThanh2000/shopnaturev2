// import {call, put, takeEvery, all} from 'redux-saga/effects';
// import { MENU, FINISH_CALL_API ,PRODUCT, FINISH_CALL_PRODUCT 
//         , NEW_PRODUCT,NEW_FINISH_CALL_PRODUCTS ,SLIDER, FINISH_SLIDER} 
//     from './actions/actions';

// import callApi from './query/index';
// import newCallProduct from './query/newCallProduct';
// // import sliderCall from './query/sliderCall';
// // import Woocommerce from './query/woo';

// //1. đầu tiên gọi myAPI để gọi đến finishCallApi
// //2 finishCallApi sẽ đổ dữ liệu vào store tên finish
// function* myAPI(){
//     yield takeEvery(MENU, finishCallApi);
// }
// function* finishCallApi(){
//     try{
//         const data = yield call(callApi);
//         // console.log(data);
//         yield put ({type :FINISH_CALL_API , data})  
//     }
//     catch(e){
//         console.log(e);
//     } 
// };

// function callProducts (){
//     return fetch('http://localhost/ShopNature/wp-json/wp/v2/product/').then(res=>res.json());
// }
// function* myProduct(){
//     yield takeEvery(PRODUCT, finishCallProduct);
// }
// function* finishCallProduct(){
//     try{
//         const data = yield call(callProducts)
//         // console.log(data);
//         yield put({type:FINISH_CALL_PRODUCT , data})
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// function* newProduct(){
//     yield takeEvery(NEW_PRODUCT, saganewFinishCallProduct);
// }
// function* saganewFinishCallProduct(){
//     try{
//         const data = yield call(newCallProduct)
//         console.log(data);
//         yield put ({type:NEW_FINISH_CALL_PRODUCTS, data})
//     }
//     catch(e){
//         console.log(e);
//     }
// };

// // function* one(){
// //     Woocommerce.getProducts().then(function(res){
// //         console.log(res.data);
// //         return res.data
// //     })
// // }

// // function sliderCall(){
// //     return fetch('http://localhost/ShopNature/wp-json/wp/v2/sliderfooter')
// //     .then(res=>res.json())
// // }
// // // export default sliderCall;
// // function* sagafinishSlider(){
// //     try{
// //         const data = yield call(sliderCall);
// //         console.log(data);
// //         yield put({type:FINISH_SLIDER ,data})
// //     }
// //     catch(e){
// //         console.log(e);
// //     }
// // }
// // function* sagaslider(){
// //     yield takeEvery(SLIDER, sagafinishSlider);
// // }

// function* mySaga(){
//     yield all([ 
//         myAPI(),
//         myProduct(),
//         newProduct(),
//         // one()
//         // sagaslider(),
//         //sagafinishSlider(),
//     ])
// };
// export default mySaga;