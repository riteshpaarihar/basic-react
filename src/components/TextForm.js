import React, {useState} from "react";

export default function TextForm(props) {
   const handleUpClick=()=>{
    //    console.log("upper case click")
    let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("text convert to uppercase" , "success")
   };
   const handleLoClick=()=>{
    
    let newText=text.toLowerCase();
       setText(newText);
       props.showAlert("text convert to lowercase" , "success")
   };
   const handleClsClick=()=>{
       
    let newText=("");
       setText(newText);
       props.showAlert("text clear on screen" , "success")
   };
   const handleCopyClick=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("text copy " , "success")
    
   };
   const handleExtraSpace=()=>{
    let newText= text.split(/ [ ] + /);
    setText(newText.join(" "));
    props.showAlert("extra space remove" , "success")
   }
   const handleOnChange=(event)=>{
    // console.log("onchange")
    setText(event.target.value)
   };

    const [text, setText] = useState('Enter text here')
  return (
   <>
    <div >
      <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <textarea 
          className="form-control"
          id="myBox"
          rows="8" value={text} onChange={handleOnChange}
          style={{backgroundColor:props.mode==='light'?'white':'gray' , color:props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>

      <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-1" disabled={text.length===0}>Convert to Uppercase</button>
      <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2 my-1" disabled={text.length===0}>Convert to Lowercase</button>
      <button type="button" onClick={handleClsClick} className="btn btn-primary mx-2 my-1" disabled={text.length===0}>Clear text</button>
      <button type="button" onClick={handleCopyClick} className="btn btn-primary mx-2 my-1" disabled={text.length===0}>Copy text</button>
      <button type="button" onClick={handleExtraSpace} className="btn btn-primary mx-2 my-1" disabled={text.length===0}>Remove Extra space</button>
    </div>
    
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h3> your Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Word and {text.length} charactes</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
   </>
    
  );
}
