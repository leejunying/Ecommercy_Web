import {GET_TOKEN, SAVE_INFO} from "./tokenTypes"
 
export const  gettoken=(value)=>{
    
    
    
    return {

        type:GET_TOKEN,
        token:value,
         

    }

}


export const saveinfo=(data)=>{

    return {

        type:SAVE_INFO,
        data:data,
        
    }

}