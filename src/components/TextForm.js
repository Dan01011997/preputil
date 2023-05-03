import React, {UseState, useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props)  {
    const Handleupclick=()=>{
       
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const Handleloclick=()=>{
       
        let newtext=text.toLowerCase()
        setText(newtext)
    }
    const Handleclear=()=>{
       
        let newtext='';
        setText(newtext)
    }
    const handleOnChange=(event)=>{
     
        setText(event.target.value)
        let c=0
  
for(let a=0;a<text.length;a++)
{
    if(text[a]==" ")
    c++
       
}

setK(c+1)
        
    }
    const Handlecopy=()=>{
var text=document.getElementById("MyBox")
text.select()
Navigator.clipboard.writeText(text.value)

    }
    
    const [text,setText]=useState('');
    const [k,setK]=useState(0);

    return (<><div className="container my-1">
        <h1>
            {props.heading}
        </h1>
<div className="mb-3">
  <label for="MyBox" className="form-label"></label>
  <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="mybutton1" onClick={Handleupclick}>UpperCase</button>
<button className="mybutton2 mx-3" onClick={Handleloclick}>Lowercase</button>
<button className="mybutton3 " onClick={Handleclear}>Clear</button>
<button className="mybutton4 mx-3" onClick={Handlecopy}>Copy</button>
    </div>
    <div className="container my-3" >
        <h3>This is the summary</h3>
        <p>{text.length} and word count is {text.split(" ").length}  and wordcount is {k}</p>

    </div>
   </> );
}


