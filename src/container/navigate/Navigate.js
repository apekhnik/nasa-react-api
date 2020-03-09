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
            <div className='navigate-item'>
                    <NavLink
                            to="/"
                            className=""
                            >HOME
                    </NavLink>
            </div>
            <div className='navigate-item'>
                    <NavLink
                            to="/APOD"
                            className=""
                            >Astronimic Picture of Day
                    </NavLink>
            </div>
            <div className='navigate-item'>
                    <NavLink
                            to="/media-search"
                            className=""
                            >NASA media search
                    </NavLink>
            </div>
           <Button text={navigate ? 'C' : 'O'} onClick={()=>setNavigate(!navigate)} className='nav-btn'/>
        </div>
    )
}
export default Navigate