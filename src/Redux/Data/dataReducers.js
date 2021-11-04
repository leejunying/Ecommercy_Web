
import { Search } from "@material-ui/icons"
import { UPDATE_PRODUCT,DELETE_PRODUCT , GET_SUCCESS} from "./dataTypes"
 const initialState={ 

    
  users:[],
  payments:[],
  products:[],
  blogs:[],
  Notification:"",

 
}


const dataReducers = (state = initialState,action)=>{

    



 

    switch(action.type)
    {

        case GET_SUCCESS:

          const data= action.data

          console.log(data.data)

                      return{

                        ...state,
                        products:data.data[0],
                        users:data.data[1],
                        payments:data.data[2],
                        blogs:data.data[3],
  
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