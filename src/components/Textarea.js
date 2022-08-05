import React, { useState } from 'react'

export default function Textarea() {
  const [text, settext] = useState('Input here')
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
    settext('copied')
    
  }
  return (
    <div className="w-50 mx-auto mt-3 bg">
      <textarea
        cols="70"
        value={text}
        onChange={textarea}
        rows="8"
        placeholder="Enter Your text here"
      ></textarea>
      <div className="w-75 mx-auto d-flex justify-content-between">
        <button className="btn btn-primary" onClick={toupper}>
          To Upper
        </button>
        <button className="btn btn-primary" onClick={tolower}>
          To Lower
        </button>
        <button className="btn btn-primary" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary" onClick={select}>
        Copy
        </button>
      </div>
      <div className="container">
        <h2>Your Notes</h2>
        <p>{text}</p>
      </div>
      <div className="container">
        <p>Letters = {text.length}</p>
        <p>worlds = {(text.length === 0)? 0 : text.split(' ').length}</p>
        <p>Reading Time = approx {text.length * 0.00361} Mins</p>
      </div>
    </div>
  )
}
