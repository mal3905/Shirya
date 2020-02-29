import React from 'react';
import Landingpage from '../Landingpage/landingpage'
import Header from '../Header/Header'
import Registration from '../Registration/Registration'
import LoginForm from '../LoginForm/LoginForm'
import './App.css';

function App() {
  return (
    <div className="App">    
    Hello from App 
    <Landingpage/>
    <Header/>
    <Registration/>
    <LoginForm/>
   

    </div>
  );
}

export default App;
