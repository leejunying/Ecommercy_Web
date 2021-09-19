import {GET_TOKEN, SAVE_INFO,UPDATE_HISTORY,UPDATE_LOVELIST,UNADD_LOVELIST,GET_LOVELIST} from "./tokenTypes"
 
export const  gettoken=(value)=>{
    
    
    
    return {

        type:GET_TOKEN,
        token:value,
         

    }

}


export const updatehistory=(data)=>{

    return{

        type:UPDATE_HISTORY,
        History:data,


    }

}
 

export const saveinfo=(data)=>{

    return {
     

        type:SAVE_INFO,
        data:data,
        
    }

}


export const getlovelist=(listname)=>{

    return{

        type:GET_LOVELIST,
        lovelist:listname,


    }

}

export const updatelovelist=(listname)=>{
 
    return {


        type:UPDATE_LOVELIST,
        lovelist:listname,

    }


}

export const unaddlovelist=(item)=>{


    return {


        type:UNADD_LOVELIST,
        lovelist:item,


    }

}