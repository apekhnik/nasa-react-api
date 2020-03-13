import React from 'react'
import './Title.css'

const Title = ({title, id}) => {
    return(
        <div className='title' id={id}>
            <h5>{title}</h5>
        </div>
    )
}
export default Title