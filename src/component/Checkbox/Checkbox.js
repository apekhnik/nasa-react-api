import React, { useState, useEffect } from 'react'
import './Checkbox.css'
const Checkbox =({label, onChange, checked, disabled})=>{
    
    const id = Math.random().toFixed(3)
    
    return(
        <div className='check-form'>
            <input type='checkbox' id={id} onChange={onChange} checked={checked} disabled={disabled}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
export default Checkbox