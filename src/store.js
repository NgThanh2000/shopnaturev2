import {createStore } from "redux";
import combineReducers from "./reducer/index";

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//     key: 'root',
//     storage,
//   }
// const persistedReducer = persistReducer(persistConfig, combineReducers)
const store = createStore(combineReducers);
export default store;
// const store = createStore(persistedReducer);
// const persistor = persistStore(store)

// export default store, persistor;

// export default () => {
//     store 
//     persistor
//     return { store, persistor }
//   }
// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }









// import createSagaMiddleware from "redux-saga";
//import file
// import mySaga from './saga';
// sagaMiddleWare.run(mySaga)
// const sagaMiddleWare = createSagaMiddleware();
// redux sẽ chạy tất cả các reducer khi có một action được thực hiện