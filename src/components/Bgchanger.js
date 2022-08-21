import React,{useState} from 'react'

export default function Bgchanger() {
  var body = document.getElementById('body')
  const [rgb, setrgb] = useState('')
  var btn = document.getElementsByClassName('random')[0]
  var input = document.getElementsByClassName('input')[0]
var xyzz = () => {
       var a = Math.floor(Math.random(1) * 255)
       var b = Math.floor(Math.random(1) * 255)
       var c = Math.floor(Math.random(1) * 255)
       var ab = a.toString()
       var cd = b.toString()
       var ef = c.toString()
       var changer1 = ab + ' ' + cd + ' ' + ef
       var changer2 = cd + ' ' + ef + ' ' + ab
       var changer3 = ef + ' ' + ab + ' ' + cd
    body.style.backgroundColor = `rgb(${changer1})`
    setrgb(`rgb = ( ${changer1})`)

  }

  return (
  <>
      <h2 className="text-center my-5">Set Body BackGround Random</h2>
    <div className='d-flex flex-column'>
        <input value={rgb} className={`input bg-light mx-auto d-block rounded`}  disabled />
        <button className="btn btn-primary w-50 m-auto mt-4" onClick={xyzz}>Click for Show rendom backgrounds</button>
    </div>
    </>
  )

  }