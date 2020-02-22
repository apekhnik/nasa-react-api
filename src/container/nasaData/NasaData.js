import React,{useState, useEffect} from 'react'
import MinImage from '../../component/MinImage/MinImage'
import {API_KEY} from '../../constants.js'
const APOD = ({date='2017-05-12'}) => {
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
console.log(apod)
    return(
        <div>
            <p>{apod.title}</p>
            <MinImage
                src={apod.url}
            />
        </div>
    )
}
export default APOD