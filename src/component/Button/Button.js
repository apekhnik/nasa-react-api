import React from 'react'
import './Button.css'
import classnames from 'classnames'
const Button =({children, onClick, text, type, className, show})=>{
    
    const cl = classnames('button', className)
    return(
    <button className={cl} onClick={onClick}>
        {text}
    </button>
    )
}
export default Button