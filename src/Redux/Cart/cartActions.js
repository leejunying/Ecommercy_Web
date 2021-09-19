
import { Payment } from "@material-ui/icons"
import { ADD_TOCART } from "./cartTypes"
import {DECREASE_CART} from "./cartTypes"
import {INCREASE_CART} from "./cartTypes"
import {PAYMENT} from "./cartTypes"
import {CLEAR_CART} from"./cartTypes"
import { TRASH_ITEMS } from "./cartTypes"
export const addToCart=(items)=>{
    
 
    return {

        type:ADD_TOCART ,
        items:items,
         

    }

}
 

export const decreasecart=(name)=>{


    
    return {

        type:DECREASE_CART,
         name:name,
    }

}


export const increasecart=(name)=>{


    return {

        type:INCREASE_CART,
        name:name,


    }


}

export const clearcart=()=>{

    return {
        type:CLEAR_CART,
    

    }

}

export const payment=(bill,amount,ship)=>{

    return {

        type:PAYMENT,
        bill:bill,
        amount:amount,
        ship:ship,

    }

}

export const trashitems=(index)=>{

    return {

        type:TRASH_ITEMS,
        index:index,


    }

}