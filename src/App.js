
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
 import Signup from './components/Signup';
import Home from './components/Home';
import {  Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Feedback from './components/Feedback';
import { Menu } from '@mui/material';




const  App =()=> {
  return (
    <div className="App" style={{color:"inherit"}}>
    
    {/* <Navbar/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/s' element={<Signup/>}/>
    <Route path='/h' element={<Home/>}/>

    </Routes> */}
    
    
      <Navbar/>
      

     <Routes>
    
    
    
     <Route path='/' element={<Login/>}/>
    <Route path='/s' element={<Signup/>}/> 
    <Route path='/h' element={<Home/>}/>
    <Route path='/d' element={<Dashboard/>}/>
    <Route path='/o' element={<Order/>}/>
    <Route path='/f' element={<Feedback/>}/>
    <Route path='/m' element={< Menu/>}/>


    </Routes>
    {/* <Dashboard/> */}
    {/* <Feedback/> */}
    
    
    </div>
  );
}
export default App;