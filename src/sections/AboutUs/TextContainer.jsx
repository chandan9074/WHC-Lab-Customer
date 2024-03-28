import React from 'react'

function TextContainer({ children, className }) {
  return (
    <p className={`text-sm md:text-base text-neutral-400 ${className}`}>
      {children}
    </p>
  )
}

export default TextContainer