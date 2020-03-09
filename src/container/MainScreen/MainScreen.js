import React from 'react'
import {Route, Switch} from 'react-router-dom'
import APODpage from '../APODpage'
import NASAIMAGE from '../NASAIMAGE'
const Mainscreen =()=>{
        return(
            
                <Switch>
                    <Route path="/APOD" component={APODpage}exact/>
                    <Route path="/media-search" component={NASAIMAGE}exact/>
                </Switch>  
            
        )
}
export default Mainscreen