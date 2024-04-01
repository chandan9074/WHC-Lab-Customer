import React from 'react'

function Blockquote({ children, className }) {
    return (
        <div className={`text-base md:text-lg bg-stroke-new-10 bg-opacity-50 p-6 my-6 text-brand-blue-500 rounded ${className}`}>
            {children}
        </div>
    )
}

export default Blockquote