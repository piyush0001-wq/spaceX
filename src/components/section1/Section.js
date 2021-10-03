import React from 'react'
import Button from '../button/Button'
import './section1.css'

function Section1({ subTitle, title, content, className }) {
  return (
    <div className={className}>
      <div className="content">
        <p className="subtitle">{subTitle}</p>
        <h1>{title}</h1>
        <p className="description">{content}</p>
        <Button text={"REWATCH"} />
      </div>
    </div>
  )
}

export default Section1
