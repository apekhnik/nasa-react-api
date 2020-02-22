import React from 'react'
import './MinImage.css'

const MinImage = ({src}) =>{
    return(
        <div className='min-image'>
            <img src={src} alt=""/>
        </div>
    )
}
export default MinImage