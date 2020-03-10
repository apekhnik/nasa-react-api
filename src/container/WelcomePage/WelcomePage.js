import React from 'react'
import './WelcomePage.css'
const WelcomePage =()=>{
    return(
        <div className="api-item__container">
            <div className='api-item'>
                <img src='https://www.1zoom.ru/big2/305/251601-Sepik.jpg' alt=''/>
                <h3 className='first'>Astronomic</h3>
                <h3 className='second'>Picture</h3>
                <h3 className='third'>of the</h3>
                <h3 className='fourth'>Day</h3>
            </div>
            <div className='api-item'>
                <img src='https://www.zastavki.com/pictures/1920x1200/2011/Space_Bright_Star_030575_.jpg' alt=''/>
                <h3 className='first2'>NASA</h3>
                <h3 className='second2'>media</h3>
                <h3 className='third2'>search</h3>
            </div>
            
        </div>
    )
}
export default WelcomePage