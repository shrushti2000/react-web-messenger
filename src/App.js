import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomePage from './containers/Homepage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import {useDispatch,useSelector} from 'react-redux'
import { isLoggedInUser } from './actions';
function App() {
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(!auth.authenticated){
        dispatch(isLoggedInUser())
    }
},[])
  return (
    <div className="App">
      <Router>
        
        <PrivateRoute path="/" exact component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={RegisterPage}/>
      </Router>
    </div>
  );
}

export default App;
