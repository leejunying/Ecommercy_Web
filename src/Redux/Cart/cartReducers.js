import { ADD_TOCART } from "./cartTypes"
import {DECREASE_CART} from "./cartTypes"
import {INCREASE_CART} from "./cartTypes"
import {PAYMENT} from './cartTypes'
import { CLEAR_CART } from "./cartTypes"
import { TRASH_ITEMS } from "./cartTypes"

const initialState={ 

    items:[],
    number:'',
    bill:'',
    ship:{},
    amount:0,
    


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

                    value.number++

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
                    if (dedata[i].name == action.name)
                    {  
                        

                    
                         dedata[i].number--

                         if(dedata[i].number==0)
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
                    if (indata[i].name ==  action.name)
                    {  
                        
                    
                         indata[i].number++

                         

                    }
                  }
               

                  return{

                    ...state,
                    items:indata

                  }




                  case PAYMENT:
                     
    
                      return{
    
                        ...state,
                        bill:action.bill,
                        amount:action.amount,
                        ship:action.ship
    
                      }


                  case CLEAR_CART:
                      return {

                      ...state,
                      bill:"",
                      amount:"",
                      ship:"",
                      items:[],


                      }

                  
                  case TRASH_ITEMS:

                  const olditems=[...state.items]

                  console.log(action.index)

                  let newitems=olditems.filter((value,indx)=>indx!=action.index)

                  console.log(newitems)
                    return{

                      ...state,
                      items:newitems


                    }



         


                  default: return state
    }

}


export default cartReducer