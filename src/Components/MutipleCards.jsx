import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

import { useEffect, useState } from "react";

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
    margin-bottom:15px;
    
 
  
  }
  .Card-status{
    margin-left:5px;
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
    border-radius:10px;
    border:4px  groove #ddc1c1;
    width:240px;
    background:white;
    cursor: pointer;
   
 
  }
  .dot{ 
    position:relative;
   width:30%;
    
    justify-content:space-evenly;
   
 
   

  }
  .fa-circle{
    font-size:xx-small;
    cursor:pointer;
    border-radius:50%;
  }
 

 .Card-image{
  width:240px;
    height:305px;

 }
 img{
 
 
   max-width: 100%;
    max-height: 100%;
 
    
 }
 .Card-Price{

   font-size:22px;
   font-weight:300;
   margin:10px 0px 0 5px;
   text-align:left;
   font-family: "Times New Roman", Times, serif;
  
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
    width:50%;
    margin:0px 0px 0 1%;
  }
  .Size-button{
    border-radius:5px;
    cursor:pointer;
      text-align:center;
     background:black;
     border:gray 3px solid;
    color:white;
    font-size:19px;
     width:20px;

  }
 
  i{
    cursor: pointer;
  }
  .fa-cart-arrow-down{

    margin: 15px 2px 15px 0;
    color: #fcfcfc;
    background: #000000;
    border:2px solid #dbc3c3;;
    font-style:small;
    width:150px;
    padding:10px;
  }
  .fa-cart-arrow-down:hover{
    transition:2s ease;
    color:red;
    transform: rotateY(360deg)

  }
  #size0{

      border-color:hotpink;

  }
  .Card-Extention{
    will-change: transform;
    transition: all 180ms ease-in;
    border-radius:5px;
    
    margin:-2.5% 0 0 -1.6%;
    border:4px groove #ddc1c1;
    border-top:none;
    z-index:100 ;
    width:100%;
    position:absolute;
    
    background:#ffffff;
   
  }
  .Extend-area{
    position:relative;
  
    background:gray
 
  }
  .Card{
   
  }
  .Card:hover{
    
  }

  .Card-Slider:hover{

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
`;
function MultipleCards(props) {


  


  let img = props;

 

   
  const Dot=[0,1,2]
   const Size=[img.S,img.M,img.L]

   const SideShow=[img.pic1,img.pic2,img.pic3]
   const [slider, setSlider] = useState(0);


   const [hoverExtend,setHoverExtend]=useState(0)
   const [selectedSize,setSelectedSize]=useState(0)
 
  
 
   const length = SideShow.length;
  

 

 

  

   const SelectedSize=(indx)=>{


      if(indx===0)
      { 
        setSelectedSize(0)
        document.querySelector(`#size${indx}`).style.borderColor='hotpink'
        document.querySelector(`#size1`).style.borderColor='gray'
        document.querySelector(`#size2`).style.borderColor='gray'

      }
      else if(indx===1)
    
      {  
        setSelectedSize(1)
        document.querySelector(`#size0`).style.borderColor='gray'
         document.querySelector(`#size2`).style.borderColor='gray'
        document.querySelector(`#size${indx}`).style.borderColor='hotpink'
       

      }

      else if(indx===2)
      
      {  setSelectedSize(2)
          document.querySelector(`#size0`).style.borderColor='gray'
         document.querySelector(`#size1`).style.borderColor='gray'
         document.querySelector(`#size${indx}`).style.borderColor='hotpink'
       

      }
      

   }


    
 


  return (
    <SmallCardsStyle>
       
      <Grid style={{marginTop:"30px"}}  container xs={2} className=" Card" 
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
            <label className=" Card-status"> {img.status==='normal'? null:img.status==="New"? <label className="lb-New">New</label>:<label className="lb-Discount">{'-'+img.discountnum+'%'}</label>} </label>
            <Grid className="flex dot">

          {  Dot.map((val,indx)=>{

                    

                    return  <input  type="radio" id={indx} checked={slider==indx} onChange={()=>setSlider(indx)}></input>
                  })

                }
        
            </Grid>
          </Grid>
          <Grid className="flex col jus-center al-center Card-image">
          
          {SideShow.map((slide, indx) => {
          return (
            <Grid 
             
      
             
              className={indx === slider ? "Slide active" : "Slide"}
              key={indx}
            >
              {indx === slider && <img src={slide}></img>}
            </Grid>
          );
        })}
          </Grid>
          <Grid className="flex col Card-Price">{img.name}   
            <label className="Price" >{selectedSize==0?'$'+img.S.price:selectedSize==1?'$'+img.M.price:'$'+img.L.price}</label>
         {img.status==="Discount" ? <label className="Origin-rice"></label>:null}
          </Grid>
          <Grid className="Extend-area">
          { hoverExtend===1? <Grid className="Card-Extention"  
         >
            <Grid className="Card-Type">
              <img className="Type-items"></img>
            </Grid>

            <Grid className="flex jus-sp-between Card-Size">
               {

                  Size.map((val,indx)=>{

                    return <Grid {...val}  key={indx} id={'size'+indx} className="Size-button" onClick={()=>{SelectedSize(indx)}} >{val.name}</Grid>
                  })

               }
               
            </Grid>
            <i class="fas fa-cart-arrow-down"> ADD TO CART </i>

         
           

         
          
          </Grid> : null}
          </Grid>
        </Grid>
      </Grid>
   
    </SmallCardsStyle>
  );
}

export default MultipleCards;
