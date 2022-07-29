import React, {useState} from 'react'

export default function Textarea() {
  const [text , settext] = useState('')
  const toupper = () => {
   let newtext = text.toUpperCase()
   settext(newtext)
  }
  const textarea = (a) => {
    settext(a.target.value)
  }
  return (
    <div className="w-50 mx-auto mt-3">
      <textarea cols="70" value={text} onChange={textarea} rows="8" placeholder='Enter Your text here'></textarea>
      <div className="w-50 mx-auto d-flex justify-content-center">
        <button className='btn btn-primary' onClick={toupper}>To Upper</button>
      </div>
    </div>
  )
}
