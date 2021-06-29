import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";


import {useDispatch, useSelector} from"react-redux"
import { useEffect, useState } from "react";
import { addToCart} from "../../../Redux";

import {NavLink,Route} from'react-router-dom'

import { CardTra } from "@material-ui/icons";
 
const SmallCardsStyle = styled.div`
  .flex {
    display: flex;
  }
  .row {
    flex-direction: row;
  }
  .col {
    flex-direction: column;
  }
  .jus-center {
    justify-content: center;
  }
  .al-center{
    align-items:center;
  }
  .jus-sp-between {
    justify-content: space-between;
  }
  .radio{
    font-size:small;
  }
  .Card-Toprow{
   
    width:100%;
    margin:2% 10% 0 5%;
    
 
  
  }

  a{
    color:black;
    text-decoration: none;
  }
  .Card-status{
    font-size: 16px;
    margin-left:1%;
    position:relative;
  }
  .Slide {
    opacity: 0;
    transition-duration: 2s ease;
  }
  .Slide.active {
    opacity: 1;
    transform: scale(1);
    transition-duration: 2s;
  }
  .Card-Slider{
    
    padding:5px 0 0px 0;
    border-radius:10px 10px 0 0px;
    
    margin-right: 5px;
 
    background:white;
    cursor: pointer;
    text-align: center;
   
 
  }
  .dot{ 
    position:relative;
   width:25%;
   margin-right: 10%;
   justify-content: space-evenly;
    
    align-items: center;
   
 
   

  }
  .fa-circle{
    font-size:xx-small;
    cursor:pointer;
    border-radius:50%;
  }
 

 .Card-image{
   
  width:220px;
    height:265px;

 }
 img{
 
 
   max-width: 100%;
    max-height: 220px;
 
    
 }
 .Card-Price{
   position: relative;
   font-size:16px;
   font-weight:300;
   margin:0 0px 5% 10%;
   text-align:left;
   font-family: "Times New Roman", Times, serif;
  
 }
 .Price{
   margin-top:2%;
   color: #030303;
 }
 .lb-New{
    border-radius:5px;
     background:Blue; 
     color:white;
     font-size:small;
     padding:5px;
    }
  .lb-Discount{
    border-radius:5px;
    background:red;
    color:white;
     font-size:small;
     padding:5px;
  }
  .Card-Size{
    justify-content: center;
    width:100%;
   
  }
  .Size-button{
    border-radius:5px;
    cursor:pointer;
      text-align:center;
     background:black;
     border:gray 3px solid;
    color:white;
    font-size:22px;
     width: 30px;
     height: 30px;
    
     margin:0 2% 0 2%;

  }
 
  i{
    cursor: pointer;
  }
  .Cart_button{
 
  
 
    color: #aec5c0;
    background: #141414;
    border:2px solid #dbc3c3;;
    font-style:small;
    width:50%;
    text-align: center;
    margin:0 25% 0 25%;
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;

    text-shadow: 2px 2px 8px #FF0000;
   
  }
  .Cart_button:hover{
    color: #dff777;
    transition:2s ease;
    transform: rotateY(360deg);
    border-color: #11f1e6;
    background-color: #331d2a;

    
     
   


  }
  #size0{

      border-color:hotpink;

  }
  .Card-Extention{
    will-change: transform;
    transition: all 180ms ease-in;
     background-color: white;

    margin-top:-5%;
    z-index:100 ;
    width:100%;
    position:absolute ;
    padding-bottom: 5%;
    
    background:#ffffff;
   
  }
  .Extend-area{
    
    justify-content: flex-start;
    position:relative;
    width:100%;
  
 
 
  }
 

  .Card-Slider:hover{

     .img-slider{
       transform: scale(1.05);
     }
     .Extend-area{
    
       border-top: none;
       height: 20%;
       box-shadow: 5px 6px #535557;
       
    
     }
     box-shadow: 5px 7px #535557;
   
 
      

   
  }


  .img-slider{

    position: relative;
    width: 80%;
  }

 



  input[type="radio"] {
    background-color: #ddd;
    background-image: -webkit-linear-gradient(0deg, transparent 20%, hsla(0,0%,100%,.7), transparent 80%),
                      -webkit-linear-gradient(90deg, transparent 20%, hsla(0,0%,100%,.7), transparent 80%);
    border-radius: 50%;
    /* box-shadow: inset 0 1px 1px hsla(0,0%,100%,.8),
                0 0 0 1px hsla(0,0%,0%,.6),
                0 2px 3px hsla(0,0%,0%,.6),
                0 4px 3px hsla(0,0%,0%,.4),
                0 6px 6px hsla(0,0%,0%,.2),
                0 10px 6px hsla(0,0%,0%,.2); */
    cursor: pointer;
    display: inline-block;
    height:2px;
 
    position: relative;
    width: 10px;
    -webkit-appearance: none;
}
input[type="radio"]:after {
    background-color: #444;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.4),
                0 1px 1px hsla(0,0%,100%,.8);
    content: '';
    display: block;    

  
    position: relative;
  
    width: 8px;
    height:8px;
}
input[type="radio"]:checked:after {
    background-color: #38fa08;
    box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.4),
                inset 0 2px 2px hsla(0,0%,100%,.4),
                0 1px 1px hsla(0,0%,100%,.8),
                0 0 2px 2px hsla(0,70%,70%,.4);
}


@media screen and (max-width: 768px){

  .Card-Slider{
    width: 150px;
  }
  .Card-image{
  width:120px;
    height:170px;

 } 
 .Card-Type{
   font-size: small;
 }
 .fa-cart-arrow-down{
  
   margin-bottom: 2%;
   font-size: x-small;
   width: 100%;
 }
 
 .Card-Price{
   font-size: medium;
 }
 .Card-status{

  padding:0;
 }
 .lb-New{
   font-size:x-small;
 
 }
 .lb-Discount{
  font-size:x-small;
 }
 .dot{
   font-size:small;
 }
 .Card-Toprow{
   margin:0;
 }

 input[type="radio"]:after {
    background-color: #444;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.4),
                0 1px 1px hsla(0,0%,100%,.8);
    content: '';
    display: block;    

  
    position: relative;
  
    width: 7px;
    height:7px;
}
.Size-button{
    border-radius:5px;
    cursor:pointer;
      text-align:center;
     background:black;
     border:gray 3px solid;
    color:white;
    font-size:16px;
     width:25px;
     margin:0 2% 0 2%;

  }
}
.Add-cart{
   position: relative;
   margin-top: 10%;
   width: 100%;
}

`;
function MultipleCards(props) {

    const dispatch= useDispatch()
  
    const productitems=useSelector(state=>state)

  let img = props || [];

 

   
  const Dot=[0,1,2]
   const Size=img.Size
 
   let  SideShow= img.Pic
   const [slider, setSlider] = useState(0);


   const [hoverExtend,setHoverExtend]=useState(0)
   const [selectedSize,setSelectedSize]=useState(0)
 
  
 
   const length = SideShow.length;
  

 

 

  

   const SelectedSize=(indx)=>{


    Size.map((value,index)=>{


      if(index===indx)
      {
        setSelectedSize(indx)
        document.querySelector(`#size${index}`).style.borderColor="hotpink"
  
      }
      else
      {
        document.querySelector(`#size${index}`).style.borderColor="gray"
      }

    })

      

   }



   const AddtoCart=()=>{

    let objitems={

      name:img.Name+"_"+Size[selectedSize].Name,

      price:Size[selectedSize],
      img: SideShow[slider],
      amount:0,

    }

    //global cart add items
 
    dispatch(addToCart(objitems))

   

      
  
   }


    
   



  return (
    <SmallCardsStyle>
       
    <Grid style={{marginTop:"30px"}}  container={true} xs={2} className=" Card" 
       onMouseEnter={() => {
        setHoverExtend(1);  
       }}
       onMouseLeave={() => {
        
        setHoverExtend(0);
       }}

       
      >
    
        <Grid className="  Card-Slider" 
            
          
        >
  
        <Grid  className="flex jus-sp-between Card-Toprow">
            <label className=" Card-status"> {img.Status==='normal'? null:img.Status==="New"? <label className="lb-New">New</label>:<label className="lb-Discount">{'-'+img.Discount+'%'}</label>} </label>
            <Grid className="flex dot">

          {  Dot.map((val,indx)=>{

                    

                    return  <input  type="radio" id={indx} checked={slider==indx} onChange={()=>setSlider(indx)}></input>
                  })

                }
        
            </Grid>
          </Grid>
          <NavLink to={`/Products/${img.Name}`}>
           <Grid className="flex col jus-center al-center Card-image">
          
          {SideShow.map((slide, indx) => {
          return (
            <Grid 
             
      
             
              className={indx === slider ? "Slide active" : "Slide"}
              key={indx}
            >
              {indx === slider && <img className="img-slider" src={slide}></img>}
            </Grid>
          );
        })}  
          </Grid>
          </NavLink>
          <Grid className="flex  col Card-Price"><Grid className="flex jus-sp-between">{img.Name} {img.Brand}</Grid>
            <label className="Price" >{Size[selectedSize].Price}</label>
           
         {img.status==="Discount" ? <label className="Origin-rice"></label>:null}
          </Grid>
          <Grid className="flex Extend-area">
          { hoverExtend===1? <Grid className=" Card-Extention"  
         >
            

            <Grid className="flex jus-sp-between al-center Card-Size">
               {

                  Size.map((val,indx)=>{

                   
                    return <Grid {...val} md={2}  key={indx} id={'size'+indx} className="Size-button" onClick={()=>{SelectedSize(indx)}} >{val.Name}</Grid>
                  })

               }
              
            
            </Grid>
            <Grid  className="Cart_button" 
            
            onClick={()=>AddtoCart()}
            
            > ADD TO CART </Grid> 

           
        
              
       
         
           

         
          
          </Grid> : null}
          </Grid>
        </Grid>
      </Grid>
    
    </SmallCardsStyle>
  );
}



 
export default  MultipleCards
