import React from 'react'

function Secondary({ children, className }) {
    return (
        <h3 className={`text-xl md:text-2xl font-semibold text-brand-blue-500 font-montserrat ${className}`}>
            {children}
        </h3>
    )
}

export default Secondary