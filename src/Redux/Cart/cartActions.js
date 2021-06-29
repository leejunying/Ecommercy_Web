
import { ADD_TOCART } from "./cartTypes"
import {DECREASE_CART} from "./cartTypes"
import {INCREASE_CART} from "./cartTypes"
 
export const addToCart=(items)=>{
    
 
    return {

        type:ADD_TOCART ,
        items:items,
         

    }

}
 

export const decreasecart=(name,size)=>{


    
    return {

        type:DECREASE_CART,
        objitems:{name:name,size:size}
    }

}


export const increasecart=(name,size)=>{


    return {

        type:INCREASE_CART,
        objitems:{name:name,size:size}


    }


}