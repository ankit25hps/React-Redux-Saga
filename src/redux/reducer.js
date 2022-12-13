import {ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART} from './constant'

export const cartData =(data=[],action)=>{

switch (action.type){
    case ADD_TO_CART:
        //add to cart login
         console.warn("ADD_TO_CART condition",action)
        return [action.data,...data]

        case REMOVE_FROM_CART:
            
             console.warn("REMOVE_FROM_CART condition",action)
              data.length=data.length ? data.length-1 :[]
             const remainingItem =data.filter((item)=>item.id!==action.data);
             console.warn("remainingitem",remainingItem)
            return [...remainingItem];


            case EMPTY_CART:
            
            console.warn("EMPTY_CART condition",action)
            data=[]
           return [...data]
        default:
        // no case matched
        return data;
}
}