import {PRODUCT_LIST,SET_PRODUCT_LIST} from './constant'

export const productData =(data=[],action)=>{

switch (action.type){
    // case PRODUCT_LIST:
    //     //add to cart login
    //      console.warn("PRODUCT_LIST condition",action)
    //     return [action.data]

        case SET_PRODUCT_LIST:
            //add to cart login
             console.warn("PRODUCT_LIST condition",action)
            return [...action.data]
        default:
        // no case matched
        return data;
}
}