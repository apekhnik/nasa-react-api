import React,{useState, useEffect} from 'react'
import Image from '../../component/Image/Image'
import Title from '../../component/Title/Title'
import Badge from '../../component/Badge/Badge'
import Text from '../../component/Text/Text'
import './apod.css'
import {API_KEY} from '../../constants.js'
import classnames from 'classnames'
import Button from '../../component/Button/Button'
import Loader from '../../component/Loader/Loader'
const APOD = ({date, size, onClick}) => {
    const [load, setLoad] = useState(false)
    const [apod, setApod] = useState({})
    const [showExplanation, setShowExplanation] = useState(false)
    useEffect(()=>{
        getData(date)
        
    },[])
    const getData = async(date)=>{
        setLoad(true)
        try {
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
        } catch (error) {
            console.log(error)
        }
        setLoad(false)
        
    }
    const sizeRender = size === 'min'? 'apod-min':'apod-full'

    const classname = classnames( sizeRender)
    if(load){
        return <Loader/>
    }
    return(
        
            <div className={classname} onClick={onClick}>
            <Title title={apod.title}/>
            <Image
                src={apod.url}
            />
            <Badge date={apod.date}/>
            {showExplanation?
            <Text text={apod.explanation}/>:null
            }
            <Button onClick={()=>setShowExplanation(!showExplanation)} text={'INFO'}/>
            
            </div>
        
       
    )
}
export default APOD