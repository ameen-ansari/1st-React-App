import React, { useState } from 'react'

export default function Textarea() {
  const [text, settext] = useState('')
  let textarea = (a) => {
    settext(a.target.value)
  }
  let toupper = () => {
    var uppertext = text.toUpperCase()
    settext(uppertext)
  }
  let tolower = () => {
    var uppertext = text.toLowerCase()
    settext(uppertext)
  }
  let clear = () => {
    settext('')

  }
  let select = () => {
    navigator.clipboard.writeText(text)
    settext("")
    
  }
  return (
    <div className="parenttexta mx-auto mt-3 bg">
      <textarea
        cols="70"
        value={text}
        onChange={textarea}
        rows="8"
        placeholder="Enter Your text here"
        className="w-100 rounded border-0  texta h-25"
      ></textarea>
      <div className="w-75 mx-auto justify-content-center parentbtns">
        <div>
        <button className="btn btn-primary m-1 " onClick={toupper}>
          To Upper
        </button>
        <button className="btn btn-primary m-1 " onClick={tolower}>
          To Lower
        </button>
        </div>
        <div>
        <button className="btn btn-primary m-1 " onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary m-1 " onClick={select}>
        Copy
        </button>
        </div>
      </div>
      <div className="container">
      <div className="container">
        <h3 className="my-4">Your Notes Info:</h3>
        <p>Reading Time = approx {(text.length * 0.00361).toFixed(2)} Mins</p>
        <p>worlds = {text.split(' ').filter((e)=>e !== "").length}</p>
        <p>Letters = {text.length}</p>
      </div >
        <p className="container w-100 ">{text}</p>
      </div>
    </div>
  )
}
