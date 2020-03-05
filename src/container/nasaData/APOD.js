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
    const [src, setSrc] = useState(true)
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
                setSrc(response.url)
                
        } catch (error) {
            console.log(error)
        }
        setLoad(false)
        
    }
    const sizeRender = size === 'min'? 'apod-min':'apod-full'
    const show = showExplanation ? 'show-info': 'hide-info'
    const classname = classnames( sizeRender)
    // const src = src.slice(0,19)==='https://www.youtube' ? true : false
    
    // // const image = ss ? 'https://avatars.mds.yandex.net/get-zen_doc/1535103/pub_5e54a284e977e25b8eec7656_5e54b527b7ff5817661e78c9/scale_1200' :  apod.url
    // // console.log(image)
    if(load){
        return <Loader/>
    }
    return(
        
            <div className={classname} onClick={onClick}>
            <Title title={apod.title}/>
            <Image
                src={apod.url}
            />
            {/* {src && sizeRender === 'apod-full' ?
            <iframe id="ytplayer" type="text/html" width='100%' height='100%'
            src={apod.url}
            frameBorder="0"/>: <Image
            src={apod.url}
            />
            } */}
            <Badge date={apod.date}/>
            {showExplanation?
            <Text text={apod.explanation}/>:null
            }
            <Button onClick={()=>setShowExplanation(!showExplanation)} text={'I'} className={show} show={showExplanation}/>
            
            </div>
        
       
    )
}
export default APOD