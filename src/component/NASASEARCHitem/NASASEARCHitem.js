import React  from 'react'
import './NASASEARCHitem.css'
import Title from '../Title/Title'

const NASASEARCHitem =({title, src, type})=>{
    // console.log(type)
    if(type==='video'){
        return(
            <div className='media-search__container__item'>
                <Title id='nasa-title' title={title}/>
                <img src={src} alt=''/>
                <img src='https://cdn.icon-icons.com/icons2/1294/PNG/512/2362136-blog-social-video-youtube-youtuber_85522.png' alt='' className='layout-img'/>       
            </div>
        )
    }
    return(
        <div className='media-search__container__item'>
            <Title id='nasa-title' title={title}/>
            <img src={src} alt=''/>
        </div>
    )
}
export default NASASEARCHitem