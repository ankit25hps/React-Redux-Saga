//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import productSaga from './productSaga';
import rootreducer from './rootreducer';
import createSagaMiddleware from 'redux-saga';
// const dummyReducer =(()=>{
//     return 100
// })
//const store=createStore(rootreducer) 
const sagaMidddleware = createSagaMiddleware();
const store =configureStore(
    {
        reducer: rootreducer,middleware:()=>[sagaMidddleware]
    }
    )
    sagaMidddleware.run(productSaga);
export default store;
