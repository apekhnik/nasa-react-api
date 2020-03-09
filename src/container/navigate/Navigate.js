import React, {useState} from 'react'
import './Navigate.css'
import {NavLink} from 'react-router-dom'
import classnames from 'classnames'
import Button from '../../component/Button/Button'
const Navigate =()=>{
    const [navigate, setNavigate] = useState(true)
    const vision = navigate ? 'nav-show':'nav-hide'
    const classname = classnames('navigate', vision)
    return(
        <div className={classname}>
            <NavLink
            to="/APOD"
            className="components_list__item"
           >TEST</NavLink>

            <NavLink
            to="/media-search"
            className="components_list__item"
           >new</NavLink>
           <Button text={navigate ? 'C' : 'O'} onClick={()=>setNavigate(!navigate)} className='nav-btn'/>
        </div>
    )
}
export default Navigate