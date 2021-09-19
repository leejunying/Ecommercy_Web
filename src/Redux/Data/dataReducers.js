
import { Search } from "@material-ui/icons"
import { GET_DATA,UPDATE_PRODUCT,DELETE_PRODUCT } from "./dataTypes"
 const initialState={ 

    
  users:[],
  payments:[],
  products:[],
  Notification:"",


}


const dataReducers = (state = initialState,action)=>{

    
 
    
 

    switch(action.type)
    {

        case GET_DATA:
        
                    return{

                      ...state,
                      users:action.users,
                      payments:action.payments,
                      products:action.products,

                    }
        case UPDATE_PRODUCT:

                    
                    let product=[...state.products]
                    product[action.indx]=action.product
                    
                    return{


                      ...state,
                      products:product

                    }
      
        case DELETE_PRODUCT:


                    let products=[...state.products]
                    products=products.filter((value,index)=>index!=action.indx)

                    

                    return {


                     ...state,
                     products:products

                    }


          
      
         
            



                  default: return state
    }

}


export default dataReducers