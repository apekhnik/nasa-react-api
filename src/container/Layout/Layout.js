import React from 'react'
import './Layout.css'
import Navigate from '../navigate/Navigate'
import Mainscreen from '../MainScreen/MainScreen'

const Layout =()=>{
    
    return(
        <div className='layout'>
            <Navigate />
            <Mainscreen/>
        </div>
    )
}
export default Layout