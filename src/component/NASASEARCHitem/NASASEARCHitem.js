import React from 'react'
import './NASASEARCHitem.css'
import Title from '../Title/Title'
const NASASEARCHitem =({title, src})=>{
    return(
        <div className='media-search__container__item'>
            <Title id='nasa-title' title={title}/>
            <img src={src} alt=''/>       
        </div>
    )
}
export default NASASEARCHitem