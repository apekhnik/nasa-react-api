import React, { useEffect, useState } from 'react'
import './NASAIMAGE.css'
import {PLACEHOLDER_FOR_SEARCH} from '../constants'
import NASASEARCHLoader from '../component/NASASEARCHitem/NASASEARCHLoader'
import ContainerSearch from './ContainerSearch/ContainerSearch'
import MainTitle from '../component/MainTitle/MainTitle'
import NASASEARCHMEDIAContainer from './NASASEARCHMEDIAColumn/NASASEARCHMEDIAContainer'
const NASAIMAGE =()=>{
    const [searchResult, setSearchResult] = useState([])
    const [searchRequest, setSearchRequest] = useState('')
    const [load, setLoad] = useState(false)
    const [mediaType_image, setMediaType_image] = useState(true)   
    const [mediaType_audio, setMediaType_audio] = useState(false)   
    const [mediaType_video, setMediaType_video] = useState(true)   

    const getSearchParams = () => {
        let arr = []
        let image = mediaType_image === true ? 'image': ''
        let audio = mediaType_audio === true ? 'audio': ''
        let video = mediaType_video === true ? 'video': ''
        arr.push(image, video, audio)
        let stroke = arr.join(',')
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
    useEffect(()=>{
        getData()
    },[])


    
    
    
    
    
  

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
            <MainTitle text='NASA SEARCH'/>
                <ContainerSearch
                    placeholder={PLACEHOLDER_FOR_SEARCH}
                    inputOnChange={(e)=>setSearchRequest(e.target.value)}
                    btnOnClick={()=>getData(searchRequest)}
                    onChangeImage={imageCheckbox}
                    onChangeVideo={videoCheckbox}
                    onChangeAudio={audioCheckbox}
                    mediaType_imageChecked={mediaType_image}
                    mediaType_videoChecked={mediaType_video}
                    mediaType_audioChecked={mediaType_audio}
                />
            <NASASEARCHMEDIAContainer
                searchResult={searchResult}
            />
        </div>
    )
}
export default NASAIMAGE