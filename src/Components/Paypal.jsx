import React,{useRef} from 'react'
import { Grid } from "@material-ui/core";
import { useEffect } from 'react';
import ReactDOM from "react-dom"
 
import {useDispatch, useSelector} from"react-redux"

import { clearcart,updatehistory } from '../Redux';
 
import axios from "axios";






    const  Paypal=()=> {
      let bill = useSelector(state=>state.cartReducer.bill)
       let amount=useSelector(state=>state.cartReducer.amount)
      let ship=useSelector(state=>state.cartReducer.ship)
      let info=useSelector(state=>state.tokenReducer.infodata)
       let dispatch=useDispatch()



      const Addpayments=()=>{ 
        //Add to payment database
        
        let arritems=bill;

    arritems=  arritems.map(value=>{return value.slice(0,value.indexOf("_"))})
        
      

        let d = new Date();  // i assume your date as 01-11-1933
        let id=info[0].History.length || 0
        id=id+1
        let history = info[0].History
        history.push({  

          Id:`${id}`,
          Items:`${bill}`,
          Amount:amount,
          Date:d,


          

        })
        let data={
          Itemsdetail:bill,
          Email:info[0].Email,
          Items:arritems,
          Amount:amount,
          History:history
        }

        
        console.log()
        

        axios
        .post(`http://localhost:4000/payment/add`,data)
        .then((res) => {
          return res.data;
        })
        .then((message)=>{
          console.log(message)
          if(message.message=="Done")
          { 
            
                   
             //Clear data state
        dispatch(updatehistory(history))

        dispatch(clearcart())


        setTimeout(()=>{

          window.location.assign('/Profile')


        },1500)
 
     

    
          }


        })
        .catch((error) => {
          console.error(error);
        });


      
        
      }








       const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

    
        const createOrder = (data, actions) =>{


            console.log(amount,bill,ship)

          return actions.order.create({
            application_context: {
              shipping_preferences: 'SET_PROVIDED_ADDRESS', //Just add this and it will take the address
            },
            purchase_units: [
              {
                description:`${bill.join(",")}`,
                amount: {
                    value: `${amount}`,
                    currency_code: "USD"
                },
                shipping:{...ship}
               
              },
            ],
          });
        };
      
        const onApprove = (data, actions) => {

           Addpayments()


          return actions.order.capture();
        };
      
        return (
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        );
      }



export default Paypal