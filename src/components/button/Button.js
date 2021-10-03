import React from 'react'
import './button.css'

function Button({ text }) {
  return (
    <div className="button">
      <button className="custom-btn btn-14" >{text}</button>
    </div>
  )
}

export default Button
