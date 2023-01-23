
import './App.css';
import Navbar from "./component/Navbar";
import Textform from './component/Textform';
import React, {useState} from 'react';
import About from "./component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [set,setcolor]=useState('light')


 
  const togglemode=()=>{
      var element = document.getElementById("myDIV");
      element.classList.toggle("darknav");
      document.body.style.backgroundColor='#FCFDF2'

      if(set==='light'){
         document.body.style.backgroundColor='#2f2c5b'
      setcolor('dark')
    }
    else {
      setcolor('light')

      document.body.style.backgroundColor='#FCFDF2'
    }

  }
if(set==='light'){
  document.body.style.backgroundColor='#FCFDF2'
}
 
  return (
  

<BrowserRouter>
    <Navbar title="Textutiles" set={set} toggleMode={togglemode}/>
    <Textform set={set}  heading="Write Your Shit Hear"/>
<Routes>


  
    <Route path="/About" element={<About/>}/>
    {/* <Route  path="/Textform" set={set}  heading="Write Your Shit Hear"  element={<Textform/> }/>  */}


</Routes>
   
</BrowserRouter>
   
  
    
  );
}

export default App;
