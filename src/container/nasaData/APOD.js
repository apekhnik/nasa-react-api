import React,{useState, useEffect} from 'react'
import Image from '../../component/Image/Image'
import Title from '../../component/Title/Title'
import Badge from '../../component/Badge/Badge'
import Text from '../../component/Text/Text'
import './apod.css'
import {
    API_KEY,
    IMAGE_FOR_PLUG_APOD
} from '../../constants.js'
import classnames from 'classnames'
import Button from '../../component/Button/Button'
const APOD = ({date, size, onClick}) => {
    
    const [apod, setApod] = useState({})
    const [showExplanation, setShowExplanation] = useState(false)
    const [fullVideo, setFullVideo] = useState()
    const [videoPlug, setVideoPlug] = useState(false)

    let checker = false
    let checkerMin = false
    const getData = async(date)=>{

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
                
                checker = ((size==='full'&& response.url.slice(0,19)==='https://www.youtube' )|| response.url.slice(0,19)==='https://player.vime') ? true : false
                checkerMin = ((size==='min' && response.url.slice(0,19)==='https://www.youtube') || response.url.slice(0,19)==='https://player.vime') ? true : false
                setFullVideo(checker)
                setVideoPlug(checkerMin)
        } catch (error) {
            console.log(error)
            setApod({
                explanation: 'test',
                date: date,
                url: IMAGE_FOR_PLUG_APOD,
                hdurl: IMAGE_FOR_PLUG_APOD,
                title: 'test title',
                copyright: 'copyright'
                })
        }
        
    }
    useEffect(()=>{
        getData(date)
        
    },[])
    
    
    const sizeRender = size === 'min'? 'apod-min':'apod-full'
    const show = showExplanation ? 'show-info': 'hide-info'
    const classname = classnames( sizeRender)

    if(videoPlug){
        return (
            <div className={classname} onClick={onClick}>
                    <Title title={apod.title}/> 
                    <Image src='https://yt3.ggpht.com/a/AGF-l79QWgqALvdnS8JMC-JqrgSMk17GwzQS96xz3Q=s900-c-k-c0xffffffff-no-rj-mo'/>
                    <Badge date={apod.date}/>
            </div>
        )
    }
        return(
            <div className={classname} onClick={onClick}>
                    <Title title={apod.title}/>
                    {fullVideo ?
                    <iframe id="ytplayer" type="text/html" width='100%' height='100%'
                    src={apod.url}
                    frameBorder="0"/>: <Image src={apod.url}/> 
                    }
                    <Badge date={apod.date}/>
                    {showExplanation?
                    <Text text={apod.explanation}/>:null
                    }
                    <Button onClick={()=>setShowExplanation(!showExplanation)} text={'I'} className={show} show={showExplanation}/>
            </div>
        
       
    )
}
export default APOD