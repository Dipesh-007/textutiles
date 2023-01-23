import React ,{useState} from 'react'

export default function Textform(p) {
   

    const HandleUpClick=()=>{  
        let ew = text.toUpperCase();
        setText(ew)
    }
    
    const HandleDownClick=()=>{  
        let ew = text.toLowerCase();
        setText(ew)
        
    }

    const HandleOnChange=(event)=>{
        setText(event.target.value);  //onchange hamesa use karnge jb textarea or input lange
    }

    const [text,setText]=useState('');

    const change=()=>{
        let s=""
        setText(s)
        
    }

    const HandleOnCopy=()=>{
        var t = document.getElementById("mybox");
        t.select();
        navigator.clipboard.writeText(t.value);
    }

    const HandleSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }

  return (

    <>
   
       
    <div className='container my-4 '>

    <h1 style={{color: p.set==='dark'?'white':'black'}} >{p.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" style={{color: p.set==='dark'?'white':'black',backgroundColor:  p.set==='dark'?'#171c4d':'white',border:0}}  onChange={HandleOnChange} id="mybox"  rows="15" value={text}></textarea>
     </div>


        <button className={`btn btn-${p.set==='light'?'warning':'light'} my-3`}       onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${p.set==='light'?'warning':'light'} my-3 mx-3`}   onClick={HandleDownClick}>Convert to Lowercase</button>
        <button className={`btn btn-${p.set==='light'?'warning':'light'} my-3`}      onClick={change}>Clear</button>  
        <button className={`btn btn-${p.set==='light'?'warning':'light'} my-3 mx-3`}    onClick={HandleOnCopy}>Copy</button>
        <button className={`btn btn-${p.set==='light'?'warning':'light'} my-3`}       onClick={HandleSpace}>Remove Extra Space</button>  

    </div>

      

    <div className="container " >
        <h3 style={{color: p.set==='light'?'black':'white'}}>Words {text.split(/\s+/).filter((elem)=>{ return elem.length!==0}).length} and Characters {text.length}</h3>
    </div>
    </>
   
  )
}
