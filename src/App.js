 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Components/Main/Main"

 
import Header from "./Components/Header/View/Header"
import Footer from "./Components/Footer/View/Footer"

 



import {persistor,store} from "./Redux/store"

import {Provider} from "react-redux"
 
import { PersistGate } from 'redux-persist/lib/integration/react';
function App() {


const Loadcomponents=(routes)=>{
  
  var result = [];



  



  if(routes.length>0)
  { 
 
    result=routes.map((route,index)=>{


      return (
      
          <Route  
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          >


          </Route>
        
      )

    })
 
    return result;
  }


}

 

  return (
    <Provider store={store}>
       <PersistGate  persistor={persistor}> 
    <Router>
    <div className="App">

    <Header></Header>
     <Switch>

  
    {
     
        Loadcomponents(Main)
    }


     </Switch>
    <Footer></Footer>

    </div>


    </Router>
     </PersistGate>
    </Provider>
  );
}

export default App;
