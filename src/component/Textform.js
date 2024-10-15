import React, {useState} from 'react'

export default function Textform(props) {
const [text, setText] = useState("");  


const handleUpClick = () =>{
    
    setText  (text.toUpperCase())
    props.showAlert("Converted to UpperCase","success");
}
const handleOnChange = (e) =>{
    console.log("text change into textarea");
    setText(e.target.value)
}
const handleLoClick = () =>{
    
    setText  (text.toLowerCase())
    props.showAlert("Converted to LowerCase","success");

}
const handleClearClick = () =>{
    
    setText  ("")
    props.showAlert("Text Cleared","success");

}
const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!","success");

  };

  return (
    <div className='container my-4'  >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary' disabled={text.length===0} onClick={handleUpClick}>convert to uppercase</button>
        <button className='btn btn-primary mx-3 my-3' disabled={text.length===0} onClick={handleLoClick}>convert to LowerCase</button>
        <button className='btn btn-primary mx-3 my-3' disabled={text.length===0} onClick={handleClearClick}>Clear text</button>
        <button className='btn btn-primary mx-3 my-3'disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
            <h2>Text summary</h2>
        <p>
        {text.split(" ").filter((word) => word.length > 0).length} words and{" "}
        {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").filter((word) => word.length > 0).length} minutes to read</p>

      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview it here."}</p>
    </div>
  ) 

}
 