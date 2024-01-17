import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';



import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Workspace from "./components/Workspace";
 import Signup from './components/Signup';
import Footer from './components/Footer';
import Login from './components/Login';



 function App()
 {

  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/workspace' element={<Workspace/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>


    
    </Routes>
   
   
</BrowserRouter>
  );
}

export default App;
