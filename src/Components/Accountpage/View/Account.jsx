import React  from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import "../CSS/Account.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {gettoken,saveinfo,updatehistory,getlovelist} from "../../../Redux"
import { useHistory, useLocation,Link } from "react-router-dom";
import Profilepage from "../../Profile/View/Profile"
import emailjs from 'emailjs-com';
import socketIOClient from "socket.io-client";

const Account = () => {

  const host = "http://localhost:4000";
  const dispatch=useDispatch()
  const token = useSelector(state=>state.tokenReducer.token)||[]
  const info=useSelector(state=>state.tokenReducer.infodata)

  const [resetmes,setResetmes]=useState("")
  const [resetmail,setResetmail]=useState("")
  
  const history=useHistory()
  const pathname = window.location.pathname;
  const [showforgot,setShowforgot]=useState(false)
  const [resultreg,setResultreg]=useState("")
  const [resultlog,setResultlog]=useState("")
  const [regfirstname,setRegfirstname]=useState({

    value:"",
    error:false,
    notice:""

  })
  const [reglastname,setReglastname]=useState({

    value:"",
    error:false,
    notice:""

  })
  const [regemail,setRegemail]=useState({

    value:"",
    error:false,
    notice:""

  })
  const [regpassword,setRegpassword]=useState({

    value:"",
    error:false,
    notice:""

  })


  const [logemail,setLogemail]=useState({

    value:"",
    error:false,
    notice:""

  })
  const [logpassword,setLogpassword]=useState({

    value:"",
    error:false,
    notice:""

  })


 


  //Function//////////////////////////
///Send feedback
  // const  sendEmail=(obj)=> {
 

  // emailjs.send('service_um6e7hf', 'register_template', obj,'user_vormaXKB5C7ZngL21q26O')
  //   .then(function(response) {
  //      console.log('SUCCESS!', response.status, response.text);
  //   }, function(error) {
  //      console.log('FAILED...', error);
  //   });

  // }

  const handleInputRes=(type,event)=>{

 

    if(type=="first")
    {
      
      
      setRegfirstname(prevState => ({
        ...prevState,
        error:false,
        notice:"",
        value: event.target.value
    }));

      
    }
    if(type=="last")
    {

      
      setReglastname(prevState => ({
        ...prevState,
        error:false,
        notice:"",
        value: event.target.value
    }));
    }
    if(type=="email")
    { 

     
      setRegemail(prevState => ({
        ...prevState,
        error:false,
        notice:"",
        value: event.target.value
    }));
    }
    if(type=="pass")
    {  
      setRegpassword(prevState => ({
        ...prevState,
        error:false,
        notice:"",
        value: event.target.value
    }));
    }

  }

const onChangeSendMail=(e)=>{


  setResetmes("")
  setResetmail(e.target.value)


}
 


 const Sendreset=()=>{

  
  axios.post('http://localhost:4000/account/reset', 
   {
    
    Email:resetmail

   }
)
 .then((res) => {
   return res.data;
 })
 .then((mess) => {

  if(mess.message==true)
  {

    setResetmes("Your email now recieve reset mail")
    setResetmail("")
  

  }
 })
 
 .catch((error) => {
   console.error(error);
 });



 }
  
  const Register=(value)=>{
    
     

    axios.post('http://localhost:4000/account/signup', 
     value
)
    .then((res) => {
      return res.data;
    })
    .then((mess) => {
      

      if(mess.status==true)
      { 
        
        setReglastname(prevState => ({
          ...prevState,
          error:false,
          value:"",
      }));

      setRegemail(prevState => ({
        ...prevState,
        error:false,
        value:"",
    }));


    setRegfirstname(prevState => ({
      ...prevState,
      error:false,
      value:"",
  }));

  setRegpassword(prevState => ({
    ...prevState,
    error:false,
    value:"",
}));

setResultreg(mess.message+"    Let Login now to the right >>>")
 
      }
  
       
 
 
    
       
    })
    
    .catch((error) => {
      console.error(error);
    });

  

 }


 const Getlovelist = (email, data) => {
  axios
   .post("http://localhost:4000/account/lovelist", {
     email: email,
     lovelist: data,
   })
   .then((res) => {
     return res.data;
   })
   .then((data) => { 

    let list=[]
     for(let value of data)
    { 


      for(let value2 of value)
      {
        list.push(value2)
      }

    }

    console.log(list)
  
 dispatch(getlovelist(list))})

   .catch((error) => {
     console.error(error);
   });
};

 const Profile=(token)=>{


  axios.post('http://localhost:4000/account/profile', {}, {
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'authorization': ` ${token}`
    }
  }
)
  .then((res) => {
    return res.data;
  })
  .then((data) => {
    

    dispatch(saveinfo(data))
    
    dispatch(updatehistory(data[0].History))

    
    Getlovelist(data[0].Email,data[0].Lovelist)

    window.location.assign("\Profile",1500)

    
  }

  )
  
  .catch((error) => {
    console.error(error);
  });


 }


 const Login=(value)=>{
    
    
  axios.post('http://localhost:4000/account/login', 
   value
)
  .then((res) => {
    return res.data;
  })
  .then((mess) => {
    if(mess.message==true)
    {setResultlog("You is login")

    console.log(mess)
     dispatch(gettoken(mess.token))
    Profile(mess.token)


    setLogemail(prevState => ({
      ...prevState,
      error:false,
      notice:"",
      value:"",
  }));

  setLogpassword(prevState => ({
    ...prevState,
    error:false,
    notice:"",
    value:"",
}));
  }
  else{

    setResultlog("Your email or password not correct ")
     

   
  }

  })
  
  .catch((error) => {
    console.error(error);
  });



}


 const validate=(type)=>{


    let errfirst={error:false,notice:""}
    let errlast={error:false,notice:""}
    let erremail={error:false,notice:""}
    let errpassword={error:false,notice:""}
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


    if(type=="reg")
    {
    if(regfirstname.value.length==0)
    errfirst={error:true,notice:"First name is empty"}
    if( reglastname.value.length==0)
    errlast={error:true,notice:"Last name is empty"}
    if(regemail.value.length==0)
    erremail={error:true,notice:"Email is empty"}
    if( regpassword.value.length==0)
    errpassword={error:true,notice:"Password is empty"}
    if(regfirstname.value.length>12)
    errfirst={error:true,notice:"First name too long"}
    if(reglastname.value.length>0 && reglastname.value.length<4)
    errlast={error:true,notice:"Last name too short"}
    if(reglastname.value.length>20)
    errlast={error:true,notice:"Last name too long"}
    if(regemail.value.length>1&& regemail.value.length<6)
    erremail={error:true,notice:"Email too short"}
    if(regemail.value.length>32)
    erremail={error:true,notice:"Email  too long"}
    if(regpassword.value.length>1&& regpassword.value.length<6)
    errpassword={error:true,notice:"Password name too short"}
    if(regpassword.value.length>20)
    errpassword={error:true,notice:"Password  too short"}
    if (!pattern.test(regemail.value)) {
      erremail={error:true,notice:"Please enter valid email address."}  
    }
  }

  if(type=="log")
    {
    if(logemail.value.length==0)
    erremail={error:true,notice:"Email is empty"}
    if(logemail.value.length>1&& logemail.value.length<6)
    erremail={error:true,notice:"Email too short"}
    if(logemail.value.length>32)
    erremail={error:true,notice:"Email  too long"}
    if (!pattern.test(logemail.value)) {
      erremail={error:true,notice:"Please enter valid email address."}  
    }
    if(logpassword.value.length==0)
    errpassword={error:true,notice:"Password is empty"}
    if(logpassword.value.length>1&& logemail.value.length<6)
    errpassword={error:true,notice:"password too short"}
    if(logpassword.value.length>32)
    errpassword={error:true,notice:"Password  too long"}
  }
      
    
    
   

    


    return {

      errfirst:errfirst,
      errlast:errlast,
      erremail:erremail,
      errpassword:errpassword


    }


 }


  const handleSubmitRes=()=>{
    
   let error= validate("reg")

  setRegfirstname({...regfirstname,...error.errfirst})

  setReglastname({...reglastname,...error.errlast})

  setRegpassword({...regpassword,...error.errpassword})

  setRegemail({...regemail,...error.erremail})



  if(error.erremail.error==""&&error.errfirst.error==""&&error.errlast.error==""&&error.errpassword.error=="")
  {  
    

    Register({

      firstname:regfirstname.value,
      lastname:reglastname.value,
      email:regemail.value,
      password:regpassword.value

    })


    
  }


  }


  const handleInputLog=(type,event)=>{
   
    if(type=="email")
    { 

    
      setLogemail(prevState => ({
        ...prevState,
        error:false,
        notice:"",
        value: event.target.value
    }));
    }
    if(type=="pass")
    { 

      setLogpassword(prevState => ({
        ...prevState,
        error:false,
        notice:"",
        value: event.target.value
    }));
    }

  }

  const handleSubmitLog=()=>{

   let error = validate("log")

   setLogemail({...logemail,...error.erremail})

   setLogpassword({...logpassword,...error.errpassword})

 
   if(error.erremail.error==""&&error.errpassword.error=="")
  {  
    
      Login({


        email:logemail.value,
        password:logpassword.value


      })

  }
  else{

    setResultlog("")
  }
}


 
const handleForgot=()=>{

let box =document.querySelector(".forgotbox").style

if(showforgot==false)
{box.opacity="1"
  setShowforgot(true)
}
else
{box.opacity="0"

setShowforgot(false)
}
}

  return (

  <Fragment>
 
  
      

    <Grid container={true} className="Login">
      <Grid container={true} className="flex State_bar" md={12}>
        <Grid items={true} md={1}></Grid>
        <Grid items={true} md={3}>
          Home / Account
        </Grid>
      </Grid>

      <Grid container={true} className="flex sp-between Account-option">
          <Grid items={true}  md={6} classname="flex col jus-start Register-form">

          <label>If you don't have an account please Register in form bellow</label>

          <h3>REGISTER</h3>

          <from name="Register" >
          <Grid container={true} md={5} className="flex col">
          <TextField value={regfirstname.value}  error={regfirstname.error} helperText={regfirstname.notice} id="standard-basic" label="First name"  autoFocus onChange={(e)=>{handleInputRes("first",e)}}/>
          <TextField value={reglastname.value}  error={reglastname.error} helperText={reglastname.notice} id="standard-basic" label="Last name" autoFocus  onChange={(e)=>{handleInputRes("last",e)}} />
          <TextField  value={regemail.value}  error={regemail.error} helperText={regemail.notice} id="standard-basic"  required label="Email" autoFocus  onChange={(e)=>{handleInputRes("email",e)}}/>
          <TextField   value={regpassword.value} error={regpassword.error}  helperText={regpassword.notice}  type="password" id="standard-password-input" autoFocus  autoComplete="current-password" required label="Password"  onChange={(e)=>{handleInputRes("pass",e)}} />
        

          </Grid>
          <Button style={{marginTop:"2%"}} variant="outlined" onClick={()=>handleSubmitRes()}>Submit</Button>

       

          </from>
          <Grid>

          <h3 style={{color:"Blue"}}>{resultreg}</h3>

</Grid>


          </Grid>
          <Grid container={true} md={6} classname="flex col jus-start Login-form ">
            <Grid> 
          <label>If you already have account please login </label>
           <h3>LOGIN NOW!</h3>
           <form>
              <Grid  className=" flex col">
          <TextField  value={logemail.value} id="standard-basic" error={logemail.error}  helperText={logemail.notice}  required label="Email" onChange={(event)=>{handleInputLog("email",event)}} />
           <TextField   value={logpassword.value} error={logpassword.error}  helperText={logpassword.notice} type="password"  id="standard-basic"   autoFocus  autoComplete="current-password" required label="Password"  onChange={(e)=>{handleInputLog("pass",e)}} />

          </Grid>
          <Grid className=" flex sp-between">
         <Button style={{marginTop:"2%"}} variant="outlined" onClick={()=>handleSubmitLog()}>Submit</Button>
         <Link  onClick={()=>handleForgot()} style={{color:"blue",fontSize:"12px"}} >Forgot password?</Link>

  
         </Grid>
          </form>
          <h3 style={{color:"red"}}>{resultlog}</h3>
          </Grid>


 
          </Grid>

      </Grid>
      <Grid container={true} md={3} className="flex col sp-between  forgotbox">
  
 
<h3 style={{width:"100%"}}>Enter your email to reset password</h3>

<Grid  className="flex al-center" >

<TextField onChange={(e)=>onChangeSendMail(e)} id="standard-basic" label="Email"></TextField>
<Button style={{margin:"5% 0 0 5%"}} variant="outlined" onClick={()=>Sendreset()}  >Send</Button>
<p></p>

</Grid>



</Grid>
    </Grid>  
    </Fragment>
  );
};
export default Account;
