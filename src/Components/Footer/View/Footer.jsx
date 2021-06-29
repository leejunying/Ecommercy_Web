import { Grid } from "@material-ui/core";
import React ,{useState} from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
const Footerstyle = styled.div`


.Flex{
   display:flex;
}
.jus-center{
   justify-content: center;

}
.jus-end{

   justify-content:flex-end;
}
.sp-between{
   justify-content: space-between;
}
.sp-around{
   justify-content: space-around;
}

.al-center{
   align-items: center;

}
.col{

   flex-direction: column;

}
.copyright{

   color:#9e9898;

}

h4{
   color:white;
}

.bor{
   border:1px solid black;
}

.Footer{


 
   padding:5% 0 5% 0;
   background:#1a1a1a;


}
.Container{

   text-align: center;

 


}
li{
   font-size: small;
   margin-bottom: 2%;
   cursor: pointer;
}

.menu-title{
   font-size: 14px;
   color:white;
}
.Sub-bar>input{
   background:#292727;
   color:white;

   font-size: 16px;
   height: 22px;
   outline-style: none;
   border:none;
   padding:2% 5% 2% 3% ;

  
}
.Sub-bar>button{
   
   opacity: 0.6;
   background:#292727;
   color:white;
   padding:10px;
 
   height: 30px;
   border:none;
   outline-style: none;
}
 #Check{
    opacity:0.6;
    color:white;
    
 }

.Footer-menu{
   width: 70%;
   color:#999999;
   margin:2% 15% 2% 15%;
   list-style: none;

}
 
.menu-title{
   margin: 0 0 5% 0;
}



 .fa-facebook-square{

   cursor: pointer;
   font-size: 24px;
 }
 .fa-google{
   cursor: pointer;
   font-size: 24px;
 }
 .fa-instagram-square
 {
   cursor: pointer;
   font-size: 24px;
 }
                     
                  
`;



function Footer() {
    

 
   const [Checked,setChecked]=useState(true)

   const handleChange = (event) => {

    
    

      if(event.target.checked===true)
      {
         document.querySelector("#Check").style.opacity="1"
         document.querySelector("#btn-sub").style.opacity="1"
         document.querySelector("#btn-sub").style.color="white"
         setChecked(event.target.checked);
      }
      if(event.target.checked===false)
      {
         document.querySelector("#Check").style.opacity="0.6"
         document.querySelector("#btn-sub").style.opacity="0.6"
         document.querySelector("#btn-sub").style.color="gray"
         setChecked(event.target.checked);
      }

    };
  
    return (

      <Footerstyle>
         <Grid className="Footer">

            <Grid container    className="Flex  jus-center    Container">
       
                  <div  >
                  
                  <div className="Flex Sub-bar "> <label style={{color:"white",fontSize:"16px"}}> JOIN OUR NEWSLETTER  </label>
                  <input style={{margin:"0 10px 0 10px"}} type="email" placeholder="e-mail address"></input>
                  
                  <button id="btn-sub">SUBCRIDE</button>  </div>
                 

                  <div className="Flex jus-end  al-center">

                  <Checkbox color={"primary"} checked={Checked} onChange={handleChange} />     <lable id="Check">Accept terms and conditions privacy policies</lable> 
                  </div>

                  </div>





              
                   

            </Grid>


               <Grid container className="flex jus-center Footer-menu"  xs={12}>

                  <Grid items={true} xs={2}>
                  <li className="menu-title">Man</li>
                  <li>{"JACKETS & COATS"} </li>
                  <li>SUITS</li>
                  <li>JEANS</li>
                  <li>SWIMWEAR</li>
                  <li>LOUNGLEWEAR</li>
                  <li>T-SHIRTS</li>

                  </Grid>
                
                  <Grid items={true} xs={2}>
                  <li className="menu-title">&nbsp;</li>
                  <li>POLO SHIRTS</li>
                  <li>TRACKSUITS</li>
                  <li>SHIRTS</li>
                  <li>TROUSERS</li>
                  <li>SHORTS</li>

                  </Grid>
                  <Grid items={true} xs={2}>
                  <li className="menu-title">Woman</li>
                  <li>{"COATS & JACKETS"}</li>
                  <li>SKIRTS</li>
                  <li>DRESSES</li>
                  <li>SUITS</li>
                  <li>JEANS</li>
                  <li>SWIMWEAR</li>

                  </Grid>
                  <Grid items={true} xs={2}>
                  <li className="menu-title">&nbsp;</li>
                  <li>LINGERIE</li>
                  <li>TOPS</li>
                  <li>LONGUEWEAR</li>
                  <li>TROUSERS</li>
                  <li>SHORTS</li>

                  </Grid>


                  <Grid items={true} xs={2}>
                  <li className="menu-title">Infomation</li>
                  <li>ABOUT US</li>
                  <li>DELIVERY INFOMATION</li>
                  <li>PRIVACY POLICY</li>
                  <li>{"TERMS & CONDITIONS"}</li>
                  <li>CONTACT US</li>
                  <li>SITE MAP</li>

                  </Grid>
                 
                




               </Grid>


               <Grid className="Flex col jus-center al-center  copyright"> 
               <div style={{width:"30%"}} className="Flex sp-between">
                  <label>COPYRIGHT @2021</label>
                  <label>Phone number:0224215231</label>
                  <label>LEEJUNYING</label>

                  </div>

                  <div style={{width:"30%",marginTop:"1%"}} className="Flex sp-between">

                     CONTACT ME WITH:
                     <div style={{width:"50%"}} className="Flex sp-between">

                     <i class="fab fa-facebook-square"></i>
                     <i class="fab fa-google"></i>
                     <i class="fab fa-instagram-square"></i>

                     </div>
                     

                  </div>
               </Grid>

           

      
         </Grid>

         </Footerstyle>
    );
  }
  
  export default  Footer;
  