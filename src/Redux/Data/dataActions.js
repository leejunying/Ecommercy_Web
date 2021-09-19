 
import { GET_DATA ,UPDATE_PRODUCT,DELETE_PRODUCT } from "./dataTypes"


  
export const getdata=(listuser,listpayment,listproducts)=>{
    
    console.log(listuser,listpayment,listproducts)
 
    return {

        type:GET_DATA ,
        users:listuser,
        payments:listpayment,
        products:listproducts,
         

    }

}

export const updateproduct=(objproduct,indx)=>{


    return {

        type:UPDATE_PRODUCT,
        indx:indx,
        product:objproduct

    }

}

export const deleteproduct=(indx)=>{

    console.log(indx)

    return {

        type:DELETE_PRODUCT,
        indx:indx,


    }


}

 
 
 

 
 