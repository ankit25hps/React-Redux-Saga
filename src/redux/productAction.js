import {PRODUCT_LIST,SEARCH_PRODUCT,SET_PRODUCT_LIST} from './constant'

export 
const productList = ()=>
{ 
    //let data ="hello, How are you";
    // let data =await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data= await data.json()
 
    // console.warn("action called",data)
    return {
        type :PRODUCT_LIST,
}
}

// export 
// const setProductList = (data)=>
// { console.warn ("set action");
// return {
//     type :SET_PRODUCT_LIST,data
// }}
export 
const productSearch = (query)=>
{
return {
    type :SEARCH_PRODUCT,
    query,
}
}