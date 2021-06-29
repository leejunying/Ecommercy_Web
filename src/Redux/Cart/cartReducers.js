import { ADD_TOCART } from "./cartTypes"
import {DECREASE_CART} from "./cartTypes"
import {INCREASE_CART} from "./cartTypes"
 


const initialState={ 

    items:[],
    isadd:false,


}


const cartReducer = (state = initialState,action)=>{

    
 
    
 

    switch(action.type)
    {

        case ADD_TOCART:
            //Fix list cart 
              //Fix list cart 
              let filtereState=[];
              const seen = new Set();
              var cart=[...state.items,action.items]
  
             cart.map((value,indx)=>{
                  if(value.name==action.items.name)
                  {

                    value.amount++

                  }          
              })

                   
              filtereState = cart.filter(el => {
                const duplicate = seen.has(el.name);
                 seen.add(el.name);
                     return !duplicate;
              }); 

            return{
                ...state,
                items:filtereState
            }   



             

            
            
         

        case DECREASE_CART:
                const dedata= [...state.items]
             
                for (var i = dedata.length; i--;) {
                    if (dedata[i].name == action.objitems.name)
                    {  
                        

                    
                         dedata[i].amount--

                         if(dedata[i].amount==0)
                         {
                             dedata.splice(i,1)

                         }

                    }
                  }
               

                  return{

                    ...state,
                    items:dedata

                  }



                  case INCREASE_CART:
                const indata= [...state.items]
             
                for (var i = indata.length; i--;) {
                    if (indata[i].name == action.objitems.name)
                    {  
                        
                    
                         indata[i].amount++

                         

                    }
                  }
               

                  return{

                    ...state,
                    items:indata

                  }

                  default: return state
    }

}


export default cartReducer