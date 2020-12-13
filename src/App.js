import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51Hx9YPD0MR4M1e19GpDPhQRXLmaEpRQ3HphltJX5Mvty1xQ10HjAaKcQNs6Unkj1gGlcoSHnu6BqYTzFdYlAO09h00w9CKyVDP')


function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
  // will run only once when the app component loads...
  //useeffect is a listerner which always listen to ooour action 
  //such a login / create account

  auth.onAuthStateChanged(authUser => {
    console.log(authUser)

    if(authUser){
      //user just logged in or was 
      dispatch({
        type: 'SET_USER',
        user:authUser
      })

    }else{
      //user is loged out
      dispatch({
        type: 'SET_USER',
        user:null
      })
    }
  })
  },[])





  return (
    //BEM
    <Router>
    <div className="app">
    

      <Switch>
      <Route path='/orders'>
      <Header />
      <Orders />
      </Route>

      <Route path='/login'>
      <Login />
      </Route>

      <Route path='/checkout'>
      <Header />
      <Checkout />
      </Route>

      <Route path='/payment'>
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      
      </Route>
      
      <Route path='/'>
      <Header />
      <Home />
      
      
      </Route>

      
      
      </Switch>
     


    </div>
    </Router>
  );
}

export default App;
