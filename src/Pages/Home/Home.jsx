import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import { Animated } from "react-animated-css";
import MultipleCards from "../../Components/MutipleCards";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
const Homestyle = styled.div`
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
  .jus-sp-betwen {
    justify-content: space-between;
  }
  .jus-sp-around {
    justify-content: space-around;
  }
  .al-center{
    align-items:center;
  }

  li {
    list-style: none;
  }

  .bd{

    border:1px solid black;
  }

  .Home{
    width:100%;
    height:auto;
  }

  .Sideshow {
    
    height:650px;
    width: 100%;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
    margin-top: -18%;

    overflow-y:hidden;
    overflow-x:hidden;
  }

  .slide-content{
    font-family:"Time new roman";
    font-weight:400;
    font-size:4.8rem;
 
    color:white;
    width:300px;
     
    position:absolute;
    margin:10% 0 0 60%;
 

  }
  .slide-subcontent{
  

    font-family:"Time new roman";
    padding:5px;
    color:#000000;
  background:white;
    font-size:2.5rem;
    position:absolute;
    margin:23% 0 0 61%;
  }

  .slide-link{
    text-decoration:none;
    border-bottom:dashed;
    color:white;
    background:none;
    padding:5px;
    position:absolute;
    margin:27% 0 0 61%;

  }
  .slide-link:hover{
    background:white;
    color:black;
  }
  .Slide {
    width :100%;
    opacity: 0;
    transition-duration: 1s ease;
  }
  .Slide.active {
    width :100%;
    opacity: 1;
    transform: scale(1);
    transition-duration: 1s;
  }

  .btn {
    height: 40px;
    width: 40px;
    background: none;
    outline-style: none;
    cursor: pointer;
  }

.thumbs-wrapper{

  display:none;

}
  
  .border-bl {
    border: 1px solid black;
  }
  .button-side {
    width: 100%;
    position: absolute;
  }

  .banner-box1 {
    max-width:490px;
    min-height: 200px;
    margin-right:10px;
    background:url("https://cdn.shopify.com/s/files/1/1521/5776/files/banner-men.png?v=1601009178%22") no-repeat
  }
  .banner-box2{
    max-width:490px;
    min-height: 200px;
    background:url("https://cdn.shopify.com/s/files/1/1521/5776/files/banner-women.png?v=1601010322") no-repeat;
  }
  .Body-Menu {
    margin-top:1%;
    background: #f3f3f3;
    height: 100px;
  }
  .fas > p {
    font-size: 1.2rem;
  }
  .fas {
    text-align: left;
 
 
  }
  a {
    cursor: pointer;
  }
 
  .fa-glasses {
    font-size: 2rem;
    font-style: match;
    margin-top: 10%;
  }
  .fa-hat-cowboy {
    font-size: 2rem;
    font-style: match;
    margin-top: 10%;
  }
  .fa-shopping-bag {
    font-size: 2rem;
    font-style: match;
    margin-top: 10%;
  }
  .fa-tshirt {
    font-size: 2rem;
    font-style: match;
    margin-top: 10%;
  }
  .fa-bell {
    font-size: 2rem;
    font-style: match;
    margin-top: 10%;
  }

  
  .Product-tab{
    height:60px;
   
    align-items:flex-end;
    font-size:18px;
    color:#aaa5a5;

  } 

  .Product-tab>div{
    cursor:pointer;
  }
  #tab1{
    cursor: pointer;
  }
  #tab0{

    cursor: pointer;
    color:black;

  }

  .Main-product{
    width:80%;
    margin:0% 10% 5% 10%;
   

   .produc-items{
     margin:1%;
   }
  }
   .Look-image{

    height:520px;
    background:url("https://cdn.shopify.com/s/files/1/1521/5776/files/lookbook-bg_a06bc677-d029-4089-b917-f134d8b3b864.png?v=1602829064")
  }

  .look-text{
    position:absolute;
 
    margin:100px 0px 0 50px;
    color:#f5e7e7;

  }
  .Demo-img{
    background-color:#fc1d1d;
    width:25px;
    height:30px;
    text-align:center;
    color:white;
   cursor:pointer;
  
  }
  #btndemo1{
    position:relative;
    margin:10% 0 0 30%;
  }
  #btndemo2{
    position:relative;
    margin:10% 0 0 78%;
  }
  #btndemo3{
    position:absolute;
    margin:20% 0 0 78%;
  }
  #demoimg1{
    position:relative;
    margin:-100% 0 0 -75%;
    opacity:0;

  }
  #demoimg2{
    position:relative;
    margin:-50% 0% 0 -30%;
    opacity:0;
    
  }
  #demoimg3{
    position:relative;
    margin:25% 0 0 -20%;
    opacity:0;
 
  }

  #demoplace1{
    
    position:absolute;
    margin:10% 0 0 55%;
  
  }

  #demoplace2{ 
    height:20px;
    position:absolute;
    margin:5% 0 0 65%;

  
 
   
  }
  #demoplace3{ 
    height:20px;
    position:absolute;
    margin:20% 0 0 70%;

     
 
   
  }

  .Discount-area{
   

    margin-top:0.5%;
    


  }
  #discount1{
    
    min-height:240px;
  

    background:url("https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108-3.png?v=1603048744")
  }

  #discount2{

    margin:0 0.5% 0 0.5%;

    background:url("https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108-2.png?v=1603048975");

     

  

 
}

#discount3{

background:url("https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108.png?v=1603049088")
}



 

.Filter{

  font-size: 20px;
  margin-top:2%;
  
  min-height: 220px;
  background: url("https://cdn.shopify.com/s/files/1/1521/5776/files/advanced_filter.png?v=1603083116")   no-repeat ;
 
}

.hidden{
  font-weight:bold;
  font-size: 16px;
  width:100%;
  background-color: black;
  color:white;
  min-height:30px;
  outline-style: none;
  margin: 0 2% 0 2%;


}
 

.btnSREACH{

  cursor:pointer;
  color:yellow;
  background-color: #383636;
  margin-left: 2%;
  outline-style: none;
}

.btnSREACH:hover{

 padding: 10px;

}
 
 h3{
  font-size: 22px;
  font-weight: 400;
 } 

.serviecslogan{
 
 text-align: center;
  background-color: #afaaaa;

}

.fa-truck-moving{
  color: #e2c4b8;
  
}

//Logo brand
.Logobrand{

  margin: 0 20% 0 15%;
  width: 100%;
}


.comment-box{
  text-align: center;
  margin:0 2% 0 2%;
  height: 250px;
  border:1px solid;
}
 


 .w-100{
 
 }
`;




function Home() {



//fetch data

//SideShow
  let img1 =

  {
    picture:"https://cdn.shopify.com/s/files/1/1521/5776/files/slide-3.png?v=1600845605%22",
    content:"HAT & GLASSES",
    subcontent:"SPECIAL PRICE",

  }
    
  let img2 =

  {

    picture:"https://cdn.shopify.com/s/files/1/1521/5776/files/slide-1.png?v=1600844319",
    content:"NEW GLAMOUR",
    subcontent:"NEW YOU",

  } ;


  let img3 =

  {

    picture:"https://cdn.shopify.com/s/files/1/1521/5776/files/slide-2.png?v=1600845140",
    content:"MEN COLLECTION",
    subcontent:"-20%",


  }
    ;

  let boximg1 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/banner-men.png?v=1601009178%22";
  let boximg2 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/banner-women.png?v=1601010322";



  

   let product1={

      status:'Discount',
      discountnum:'18',
      S:{name:'S',price:"135" },
      M:{name:'M',price:"155" },
      L:{name:'L',price:"195"},
      pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/apple_cinema_30_6c34d526-40b2-4948-9149-016a7676b21d_720x.jpg?v=1570332862",
      pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2@2x.jpg?v=1606026031",
      pic3:"//cdn.shopify.com/s/files/1/1521/5776/products/samsung_tab_1_80b59129-aa37-4451-a296-c4a7d257df20.jpg?v=1606026031",
      type:"T-Shirt",
      name:'Summer-01'
  
  
  
    }

    let product2={

      status:'New',
      discountnum:'',
      S:{name:'S',price:"145" },
      M:{name:'M',price:"155" },
      L:{name:'L',price:"205"},
      pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_1_360x.jpg?v=1570332862",
      pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
      pic3:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
      type:"T-Shirt",
      name:'Summer-02'
  
  
  
    }
    let product3={

      status:'New',
      discountnum:'',
      S:{name:'S',price:"145" },
      M:{name:'M',price:"155" },
      L:{name:'L',price:"205"},
      pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_1_360x.jpg?v=1570332862",
      pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
      pic3:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
      type:"T-Shirt",
      name:'Summer-02'
  
  
  
    }
    let product4={

      status:'New',
      discountnum:'',
      S:{name:'S',price:"145" },
      M:{name:'M',price:"155" },
      L:{name:'L',price:"205"},
      pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_1_360x.jpg?v=1570332862",
      pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
      pic3:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
      type:"T-Shirt",
      name:'Summer-02'
  
  
  
    }
    
    //Look demo image

    let demo1={

      status:'New',
      discountnum:'',
      S:{name:'S',price:"145" },
      M:{name:'M',price:"155" },
      L:{name:'L',price:"205"},
       pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_180x.jpg?v=1570332862%20180w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_360x.jpg?v=1570332862%20360w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_540x.jpg?v=1570332862%20540w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_720x.jpg?v=1570332862%20720w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_900x.jpg?v=1570332862%20900w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1080x.jpg?v=1570332862%201080w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1296x.jpg?v=1570332862%201296w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1512x.jpg?v=1570332862%201512w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1728x.jpg?v=1570332862%201728w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_2048x.jpg?v=1570332862%202048w",
      pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
      pic3:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
      type:"T-Shirt",
      name:'Summer-04'
  
  
  
    }



    let demo2={

      status:'Discount',
      discountnum:'20',
      S:{name:'S',price:"145" },
      M:{name:'M',price:"155" },
      L:{name:'L',price:"205"},
       pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_180x.jpg?v=1570332861%20180w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_360x.jpg?v=1570332861%20360w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_540x.jpg?v=1570332861%20540w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_720x.jpg?v=1570332861%20720w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_900x.jpg?v=1570332861%20900w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1080x.jpg?v=1570332861%201080w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1296x.jpg?v=1570332861%201296w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1512x.jpg?v=1570332861%201512w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1728x.jpg?v=1570332861%201728w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_2048x.jpg?v=1570332861%202048w",
      pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
      pic3:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
      type:"T-Shirt",
      name:'Summer-04'
  
  
  
      }
      

      let demo3={

        status:'New',
        discountnum:'',
        S:{name:'S',price:"145" },
        M:{name:'M',price:"155" },
        L:{name:'L',price:"205"},
        pic1:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
         pic2:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
        pic3:"https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
        type:"T-Shirt",
        name:'Summer-04'
    
    
    
      }


    
  

 
    //Look backgound image
     
    let lookproduct="https://cdn.shopify.com/s/files/1/1521/5776/files/lookbook-bg_a06bc677-d029-4089-b917-f134d8b3b864.png?v=1602829064"
    


    //Discount backgound image 

    let discount_banner1="https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108-3.png?v=1603048744"

    let discount_banner2="https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108-2.png?v=1603048975"

    let discount_banner3="https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108.png?v=1603049088"




  //Collection Demoimage











    //////////////////////////////////////////////

    //Default data

    const SideShow = [img1, img2, img3];
    const length = SideShow.length;
    let featured=[product2,product1,product3,product4,product1,product2,product3,product4]
    let product=[product1,product2,product3,product4,product1,product2,product3,product4]
    let collection=[product1,product2,product3,product4]
    let top3=[product1,product2,product3]

    //////////////////////////////////////////////

    //State control
    const [slider, setSlider] = useState(0);
    const [tab,setTab] =useState(0)
 






  //Function control///////////////////////
  //Tab selected
  const   selectedTab=(num)=>{
   
  
     
     if(num===0)
     {  

      document.querySelector("#tab0").style.color="black"
      document.querySelector("#tab1").style.color="#aaa5a5"
      
       setTab(0)
     }
     else if (num===1){
   
   
       document.querySelector("#tab0").style.color="#aaa5a5"
       document.querySelector("#tab1").style.color="black"
       setTab(1)
     }
  }
  //Slider function
  const ControlSilder = (type) => {
    let a = slider;
 
    if (type == "pre") {
      console.log(a);
      setSlider(a === 0 ? 0 : a-1);
    } else if (type == "aft") {
      {
        setSlider(a === length - 1 ? 0 : a + 1);
      }
    }
  };

  
  //Hover Demo image
  const Hoverdemo=(place,num)=>{



    
          if(place===0&&num===0)
            document.querySelector("#demoimg1").style.opacity="1"
          if(place===0&&num===1)
          document.querySelector("#demoimg1").style.opacity="0"


          if(place===1&&num===0)
          document.querySelector("#demoimg2").style.opacity="1"
        if(place===1&&num===1)
        document.querySelector("#demoimg2").style.opacity="0"



        if(place===2&&num===0)
        document.querySelector("#demoimg3").style.opacity="1"
      if(place===2&&num===1)
      document.querySelector("#demoimg3").style.opacity="0"
 


  }


  return (
    <Homestyle>
      <Grid className="Home">
      <Grid xs={12} className="flex Sideshow">


      <Carousel>
                 {SideShow.map((val,indx)=>{


                    return  <div>
                      
                     
              <div className="slide-content">{val.content}</div>
              <div className="slide-subcontent">{val.subcontent}</div>
              <a className="slide-link" href="#">SHOP NOW <i class="far fa-hand-point-right"></i></a>
                       <img src={val.picture}></img></div>

                 })}
            </Carousel>
        {/* <Grid className="flex jus-sp-between button-side">
          <i
            onClick={() => {
              ControlSilder("pre");
            }}
            className="fas  btn fa-chevron-left"
          ></i>
          <i
            onClick={() => {
              ControlSilder("aft");
            }}
            className="fas  btn fa-chevron-right"
          ></i>
        </Grid>
        {SideShow.map((slide, indx) => {
          return (
            <Grid 
             
              className={indx === slider ? "Slide active" : "Slide"}
              key={indx}
            >

              <div className="slide-content">{slide.content}</div>
              <div className="slide-subcontent">{slide.subcontent}</div>
              <a className="slide-link" href="#">SHOP NOW <i class="far fa-hand-point-right"></i></a>
              {indx === slider && <img   src={slide.picture}></img>}
            </Grid>
          );
        })} */}
      </Grid>

      <Grid container xs={12} className="flex jus-center">
      <Grid items={true} xs={1}></Grid>
        <Grid   items={true} xs={5}  className="banner-box1">
          
        </Grid>
        <Grid items={true} xs={5} className="banner-box2">
          {" "}
         
        </Grid>
        <Grid items={true} xs={1}></Grid>
      </Grid>
      <Grid  container xs={12} className="flex jus-center jus-sp-between Body-Menu">
     
       
        <Grid style={{margin:"0 0 0 9%"}} items={true} xs={10} md={9} className="flex jus-center jus-sp-between">
          <Grid style={{margin:"0 0 0 2%"}} xs={2}>
          <i class="fas fa-glasses"></i>
          </Grid>
          <Grid xs={2}>  <i class="fas fa-hat-cowboy"></i> </Grid>
          <Grid xs={2}> <i class="fas fa-tshirt"></i> </Grid>
          <Grid xs={2}> <i class="fas fa-shopping-bag"></i> </Grid>
          <Grid xs={2}>    <i class="fas fa-bell"></i> </Grid></Grid>
       
          
          
      
          
          </Grid>


          <Grid container xs={12} className="flex jus-center Product-tab">

             <div id="tab0" onClick={()=>selectedTab(0)}  >PRODUCTS TAB    </div>    <div style={{width:"20px"}}></div> <div onClick={()=>selectedTab(1)} id="tab1">FEATURED</div>  

          </Grid>
      <Grid className="flex jus-center Main-product" container xs={12}>
        



          {
            

            tab===0?
            product.map((item,index)=>{

            return <div className="produc-items" items={true} xs={3}> <MultipleCards {...item} key={index}></MultipleCards></div>

          })
          :

          


        featured.map((item,index)=>{

        return <div className="produc-items" items={true} xs={3}> <MultipleCards {...item} key={index}></MultipleCards></div>

        })}
    
          
  
      </Grid>
    
      <Grid   className="Look-image">

          <div className="look-text">
            <div style={{fontSize:"5rem"}}>LOOKBOOK</div>
              <div  style={{fontSize:"2rem"}}>HOVER THE NUMBER TO SEE THE PRODUCT</div>
              </div>

             <div 
              id="demoplace1"

             onMouseEnter={()=>Hoverdemo(0,0)}
                onMouseLeave={()=>Hoverdemo(0,1)} > <button id="btndemo1"  className="Demo-img"

              

               >1</button>

              
            <div    id="demoimg1" ><MultipleCards {...demo1} ></MultipleCards></div>
 
 
</div>  


              <div    id="demoplace2"  onMouseEnter={()=>Hoverdemo(1,0)}
              onMouseLeave={()=>Hoverdemo(1,1)} 
              >

              <button id="btndemo2"  className="Demo-img" >2</button>
              <div id="demoimg2" ><MultipleCards {...demo2} ></MultipleCards></div>
              </div>
            
              
            
              
              <div  id="demoplace3" onMouseEnter={()=>Hoverdemo(2,0)}
              onMouseLeave={()=>Hoverdemo(2,1)}> 

              <button id="btndemo3"  className="Demo-img"
              
              
              >3</button>

<div id="demoimg3"><MultipleCards {...demo3} ></MultipleCards></div>
              </div>
            



            

          

              

      </Grid>
      <Grid container   xs={12} className="flex Discount-area jus-center ">

       

         

          <Grid items={true } id="discount1"  className="bd " xs={3}></Grid>
          <Grid items={true } id="discount2" className="bd" xs={3}></Grid>
          <Grid items={true } id="discount3" className="bd" xs={3}></Grid>

          
       

      </Grid> 
      
      <Grid className="flex  al-center jus-center"><h3 style={{marginTop:"2%"}}>COLLECTION SUMMER 2021</h3></Grid>

      <Grid style={{margin:"0 12% 0 13%"}} className="flex  jus-center Collection">

        
          
          {collection.map((val,indx)=>{

              return  <Grid xs={3}> <MultipleCards {...val} key={indx}></MultipleCards></Grid>

          })}
       

      </Grid>
      <Grid conteinr xs={12} className="flex jus-center">
        <Grid xs={1}></Grid>
      <Grid xs={9} items={true} className="Filter" >

          <Grid className="flex col al-center jus-center">

              <h3>ADVANCED FILTER </h3>

              <h3 style={{marginTop:"-1%"}}>SEARCH FOR A PRODUCTS,<label style={{color:"red"}}> YOU ARE REALLY LOOKING FOR</label></h3>

           <Grid container className="flex">
            <Grid xs={1}></Grid>
			    	<Grid items={true} xs={3}>	
            <select   className="hidden"> 
						<option className="first"   value="">Choose a collection...</option>
            <option value="/collections/bestsellers" data-id="371579784">Bestsellers</option>
            <option value="/collections/featured" data-id="371579464">Featured</option></select>  
            </Grid>      

          	<Grid items={true} xs={3}>	      
            <select className="hidden"> 
						<option className="first" value="">Color</option><option value="black" rel="black">Black</option><option value="red" rel="red">Red</option></select>
            </Grid>   
            <Grid items={true} xs={3}>	 
            <select className="hidden"> 
						<option className="first" value="">Brand</option><option value="insight" rel="insight">Insight</option><option value="brixton" rel="brixton">Brixton</option><option value="poler" rel="poler">Poler</option></select>
            </Grid>   

            <button  className="btnSREACH" >SREACH</button>
            </Grid>
          </Grid>

       

       
				 

         



     


      </Grid>
      <Grid xs={1}></Grid>
      </Grid>
      <Grid className="flex jus-center"><h3 >TOP 3</h3></Grid>
      <Grid container className="Top3 flex jus-center ">

            {top3.map((val,indx)=>{

                return  <Grid items={true} xs={2}> <MultipleCards {...val} key={indx}></MultipleCards></Grid>

            })}


      </Grid>

      <Grid container  style={{margin:"2% 10% 0 10%",width:"80%",color:"white"}}    className="flex jus-center al-center  "  >
        
    
            <Grid items={true} xs={3} className="serviecslogan" >

              <div><i class="fas fa-truck-moving"></i>&nbsp;FREE SHIPPING AND RETURN </div>


            </Grid>

            <Grid items={true}xs={3} className="serviecslogan">

<div><i  class="fas fa-truck-moving"></i>&nbsp;MONEY BACK GUARANTEE </div>


</Grid>

<Grid items={true}xs={3} className="serviecslogan">

<div><i class="fas fa-truck-moving " ></i>&nbsp;FAST AND RELIABLE SUPPORT </div>
 
</Grid>


      </Grid>
      <Grid className="flex jus-center"><h3>SHOP BY BRAND</h3></Grid> 
    
                <Grid container className="flex Logobrand"  xs={10}  >



                <Grid items={true} xs={2}><img  className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_01.png?v=1603131718"></img></Grid> 
                <Grid items={true} xs={2}><img className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_02.gif?v=1603131784" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_02.gif?v=1603131784" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_03.gif?v=1603131828" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_03.gif?v=1603131828" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_04.gif?v=1603131863" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_04.gif?v=1603131863" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_05.gif?v=1603131915" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_05.gif?v=1603131915" alt=""/></Grid>


                </Grid>
                <Grid container className="flex Logobrand"  xs={10}  >
                
                
               

                <Grid items={true} xs={2}><img className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_06.gif?v=1603131950" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_06.gif?v=1603131950" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 ls-is-cached lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_10.gif?v=1603132144" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_10.gif?v=1603132144" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_07.gif?v=1603132032" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_07.gif?v=1603132032" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 ls-is-cached lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_08.gif?v=1603132078" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_08.gif?v=1603132078" alt=""/></Grid>
                <Grid items={true} xs={2}><img className="w-100 ls-is-cached lazyloaded" src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_09.gif?v=1603132113" data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_09.gif?v=1603132113" alt=""/></Grid>         
                </Grid>
      <Grid className=" flex col  al-center jus-center Customersay">

                 <h3>WHAT CUSTOMERS ARE SAYING</h3>
                <Grid container xs={8} className="flex jus-center">
                <Grid xs={3} className="comment-box" >Content 1</Grid>
                <Grid xs={3} className="comment-box">Content 2</Grid>
                <Grid xs={3}className="comment-box" >Content 3</Grid>
                </Grid>
      </Grid>
      <Grid className="flex col al-center jus-center Blog ">
      <h3>FROM THE BLOG</h3>
      <Grid container xs={8} className="flex jus-center">
      <Grid xs={3} className="comment-box" >Content 1</Grid>
                <Grid xs={3} className="comment-box">Content 2</Grid>
                <Grid xs={3}className="comment-box" >Content 3</Grid>
      </Grid>
      



      </Grid>
      <Grid className="Follow"></Grid> 
     
      </Grid>
    </Homestyle>
  );
}

export default Home;
