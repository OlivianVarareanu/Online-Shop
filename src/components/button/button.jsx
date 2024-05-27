import React from 'react'
import "./button.css"

const Button = ({text,style,onClick}) => {
  return (
    <>
        <button onClick={onClick} style={style} className='customButton'>{text}</button>
    </>
  )
}

export default Button
