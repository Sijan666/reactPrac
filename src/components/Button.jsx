import React from 'react'

const Button = ({btntext, className}) => {
  return (
    <button className={`py-4 px-5 bg-[#4335DE] rounded-[42px] ${className}`}>{btntext}</button>
  )
}

export default Button