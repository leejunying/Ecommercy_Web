import { GET_TOKEN,SAVE_INFO, UPDATE_HISTORY,UPDATE_LOVELIST,UNADD_LOVELIST,GET_LOVELIST } from "./tokenTypes"
 


const initialState={ 

    token:"",
    infodata:{},
    history:[],
    lovelist:[],
    oldlovelist:[],


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

            

        case UPDATE_HISTORY:
            return {

                ...state,
                history:action.History,


            }
        

        case GET_LOVELIST:
            return{

                ...state,
                lovelist:action.lovelist,
                oldlovelist:action.lovelist

            }
        
            
        case UPDATE_LOVELIST:

            
            var newlist=state.lovelist
            newlist.push(action.lovelist)
 
                let filtereState=[];
            const seen = new Set();
 
            
 
           filtereState = newlist.filter(el => {
                const duplicate = seen.has(el.Name);
                 seen.add(el.Name);
                     return !duplicate;
              }); 

              

              console.log(filtereState)
 
          
            return{

            ...state,
            lovelist:filtereState,

            }
            
        
        case UNADD_LOVELIST:
            var lovelist=state.lovelist
            
             lovelist=lovelist.filter((value)=>value.Name!=action.lovelist)

            return {

                ...state,
                lovelist:lovelist

            }
         


             default: return state
    }

}


export default tokenReducer