import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Dashbord from './components/Dashbord';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
    
  <Router>
    <NavBar/>
   
    <Switch>
          <Route exact path="/" component={Home}/>
           
          
          <Route exact path="/login" component={LogIn} />
            
          
          <Route exact path="/signup"component={SignUp} />
          <Route exact path="/dashbord"component={Dashbord} />
         
          
    </Switch>
  </Router>  
  <Footer/>
  
  
    </>
  );
}


export default App;
