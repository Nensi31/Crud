import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function Homeome() {
  return (
   <>
   <center>
    <div className='row'>
    
   <Link className='signup' to="./signup">Signup</Link>
 
   <Link to="./login" className='login'>Login</Link>
   </div>
   </center>
    </>

  )
}
