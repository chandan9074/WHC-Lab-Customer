import React from 'react'

function TextContainer({ children, className }) {
  return (
    <div className={`text-sm md:text-base text-neutral-400 ${className}`}>
      {children}
    </div>
  )
}

export default TextContainer