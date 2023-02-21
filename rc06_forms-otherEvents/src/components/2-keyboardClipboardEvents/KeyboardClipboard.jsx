import { useState } from "react"

const KeyboardClipboard = () => {
  const [inputData, setinputData] = useState("")
  const handleKeyDown =(e)=>{
console.log(e.keyCode)
if(e.keyCode >=48 && e.keyCode <=57){

  alert ("please dont enter a number")
  e.preventDefault()
  }
  }
  const handleAreaPaste=(e)=>{
    console.log(e);
    e.target.style.fontSize ="30px"
    e.target.style.border ="3px solid blue"
    e.target.style.backgroundColor ="yellow"

    e.target.value += e.clipboardData.getData("text").toLocaleUpperCase()
    e.preventDefault()
  }

const handleParCopy=(e)=>{
  e.preventDefault()

alert("you can not copy this page")
}
 
const handleParCut=(e)=>{
  e.preventDefault()

alert("you can not cut this page")
}
 
  return (
    <div className="container text-center">
      <h2 className="text-danger">Keyboard-Clipboard Event</h2>

      <input type="text" className="form-control" 
      onChange={(e)=>{
       e.target.value = e.target.value.toLocaleUpperCase()
        setinputData(e.target.value)
        
        console.log(e.keyCode)
        }}
        onKeyDown={handleKeyDown}
       />
       <div className="text-start mt-4" >
         <h6>Copied Input Data</h6>
        <p onCopy={handleParCopy} onCut={handleParCut} >{inputData.toLowerCase()}</p>
       </div>
      <p className="text-start mt-4" >{inputData.toLowerCase()}</p>
      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};
export default KeyboardClipboard;
