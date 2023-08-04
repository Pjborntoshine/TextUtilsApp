import React, { useState } from 'react';


export default function TextFrom(props) {
  const handelUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handelOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here...');

  return (
<div>
<h1>{props.heading }</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelOnChange} id="text-box" rows="8"></textarea>
  <button className="btn btn-primary"on onClick={handelUpClick}>convert to Uppercase</button>
</div>
    
</div>
  )
}

