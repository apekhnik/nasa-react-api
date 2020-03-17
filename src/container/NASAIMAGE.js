import React, { useEffect, useState } from 'react'
import './NASAIMAGE.css'
import NASASEARCHitem from '../component/NASASEARCHitem/NASASEARCHitem'
import Button from '../component/Button/Button'
import {PLACEHOLDER_FOR_SEARCH} from '../constants'
import Checkbox from '../component/Checkbox/Checkbox'
import NASASEARCHLoader from '../component/NASASEARCHitem/NASASEARCHLoader'
const NASAIMAGE =()=>{
    const [searchResult, setSearchResult] = useState([])
    const [searchRequest, setSearchRequest] = useState('')
    const [load, setLoad] = useState(false)

    const [mediaType_image, setMediaType_image] = useState(true)   
    const [mediaType_audio, setMediaType_audio] = useState(false)   
    const [mediaType_video, setMediaType_video] = useState(true)   
    
    useEffect(()=>{
        getData()
    },[])


    const getSearchParams = () => {
        let arr = []
        let image = mediaType_image === true ? 'image': ''
        let audio = mediaType_audio === true ? 'audio': ''
        let video = mediaType_video === true ? 'video': ''
        arr.push(image, video, audio)
        let stroke = arr.join(',')
        console.log(stroke)
        return stroke
        
    }
    const mediaType = getSearchParams()
    
    
    
    const getData = async (request=PLACEHOLDER_FOR_SEARCH)=>{
        setLoad(true)
        try {
            const response1 = await fetch(`https://images-api.nasa.gov/search?q=${request}&media_type=${mediaType}`)
                  .then(response=>response.json())
                  setSearchResult(response1.collection.items)


                  const response = await fetch(`https://images-api.nasa.gov/search?q=${request}&media_type=audio&year_start=2018&year_end=2019`)
                            .then(response=>response.json())
                 console.log(response) 
          } catch (error) {
            console.log(error)
          }
          setLoad(false)
    }

    const imageCheckbox = ({ target: { checked } }) => {
        setMediaType_image(checked);
    };
    const videoCheckbox = ({ target: { checked } }) => {
        setMediaType_video(checked);
    };
    const audioCheckbox = ({ target: { checked } }) => {
        setMediaType_audio(checked);
    };



    
    if(load){
       return <div className='search-loader-container'>
           <NASASEARCHLoader/>
        </div>
    }
    return(
        <div className='media-search'>
            <h1>NNASA IMAGE SEARCH</h1>
                <div className='nasa-image-search'>
                    <input type='text' onChange={(e)=>setSearchRequest(e.target.value)} placeholder={PLACEHOLDER_FOR_SEARCH}/>
                    <Button text='SEARCH' onClick={()=>getData(searchRequest)}/>
                    <div className='checkbox-container'>
                        <Checkbox label='image' onChange={imageCheckbox} checked={mediaType_image}/>
                        <Checkbox label='video' onChange={videoCheckbox} checked={mediaType_video}/>
                        <Checkbox label='audio' onChange={audioCheckbox} checked={mediaType_audio} disabled/>
                    </div>  
                </div>
            <div className='media-search__container'>
            
                        <div className='media-columns'>
                                {searchResult.map((item, index)=>{
                                       
                                        while(index<26){
                                            return  <NASASEARCHitem
                                                        title={item.data[0].title}
                                                        src={item.links[0].href}
                                                        load={load}
                                                        type={item.data[0].media_type}
                                                        key={index}
                                                    /> 
                                        }
                                })}     
                        </div>
                        <div className='media-columns'>
                                {searchResult.map((item, index)=>{
                                        
                                        while(index>26&&index<51){
                                            return  <NASASEARCHitem
                                                        title={item.data[0].title}
                                                        src={item.links[0].href}
                                                        type={item.data[0].media_type}
                                                        key={index}
                                                    /> 
                                        }
                                })} 
                        </div>
                        <div className='media-columns'>
                                {searchResult.map((item, index)=>{
                                        
                                        while(index>50&&index<76){
                                            return  <NASASEARCHitem
                                                        title={item.data[0].title}
                                                        src={item.links[0].href}
                                                        type={item.data[0].media_type}
                                                        key={index}
                                                    /> 
                                        }
                                })} 
                        </div>
                        <div className='media-columns'>
                                {searchResult.map((item, index)=>{
                                        
                                        while(index>75&&index<101){
                                            return  <NASASEARCHitem
                                                        title={item.data[0].title}
                                                        src={item.links[0].href}
                                                        type={item.data[0].media_type}
                                                        key={index}
                                                    /> 
                                        }
                                })} 
                        </div>
            </div>
        </div>
    )
}
export default NASAIMAGE