import React,{useState, useEffect} from 'react'
import Image from '../../component/Image/Image'
import Title from '../../component/Title/Title'
import Badge from '../../component/Badge/Badge'
import Text from '../../component/Text/Text'
import './apod.css'
import {API_KEY} from '../../constants.js'
import classnames from 'classnames'
const APOD = ({date='2015-05-12', size}) => {
    const [apod, setApod] = useState({})
    
    useEffect(()=>{
        getData(date)
    },[])
    const getData = async(date)=>{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
                                    .then(response=>response.json())
        
        setApod({
            explanation: response.explanation,
            date: response.date,
            url: response.url,
            hdurl: response.hdurl,
            title: response.title,
            copyright: response.copyright
        })
        
    }
    const sizeRender = size === 'min'? 'apod-min':'apod-full'
    const classname = classnames( sizeRender)
console.log(size)
    return(
        
            <div className={classname}>
            <Title title={apod.title}/>
            <Image
                src={apod.url}
            />
            <Badge date={apod.date}/>
            <Text text={apod.explanation}/>
            </div>
        
       
    )
}
export default APOD