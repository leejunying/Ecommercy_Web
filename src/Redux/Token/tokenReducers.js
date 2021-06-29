import { GET_TOKEN,SAVE_INFO } from "./tokenTypes"
 


const initialState={ 

    token:"",
    infodata:{}


}


const tokenReducer = (state = initialState,action)=>{


 
    
    switch(action.type)
    {

        case GET_TOKEN:

      

            return{
                ...state,
                token:action.token
            }  


        case SAVE_INFO:


            return{
                ...state,
                infodata:action.data

            }


             default: return state
    }

}


export default tokenReducer