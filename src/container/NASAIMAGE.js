import React, { useEffect, useState } from 'react'
import './NASAIMAGE.css'
import NASASEARCHitem from '../component/NASASEARCHitem/NASASEARCHitem'
import Button from '../component/Button/Button'
import Loader from '../component/Loader/Loader'
import Checkbox from '../component/Checkbox/Checkbox'
const NASAIMAGE =()=>{
    const [searchResult, setSearchResult] = useState([])
    const [searchRequest, setSearchRequest] = useState('')
    const [load, setLoad] = useState(false)
    
                                                
    useEffect(()=>{
        getData()
    },[])

    const paramObject =
        {
        image: true,
        video: false, 
        audio: false}
    const getSearchParams = obj => {
        let arr = []
        let image = obj.image === true ? 'image': ''
        let audio = obj.audio === true ? 'audio': ''
        let video = obj.video === true ? 'video': ''
        arr.push(image, video, audio)
        let stroke = arr.join(',')
        console.log(stroke)
        return stroke
        
    }
    const getData = async (request='moon')=>{
        setLoad(true)
        try {
            const response1 = await fetch(`https://images-api.nasa.gov/search?q=${request}&media_type=${getSearchParams(paramObject)}`)
                  .then(response=>response.json())
                  console.log(response1)
                  setSearchResult(response1.collection.items)


                  const response = await fetch(`https://images-api.nasa.gov/search?q=${request}&media_type=video&year_start=2018&year_end=2019`)
                            .then(response=>response.json())
                 console.log(response) 
          } catch (error) {
            console.log(error)
          }
          setLoad(false)
    }
    if(load){
       return <div className='media-search'>

        </div>
    }
    return(
        <div className='media-search'>
            <h1>NEW COMPONENT ATTENTION</h1>
            <div className=''>
                <input type='text' onChange={(e)=>setSearchRequest(e.target.value)}/>
                <Button text='go' onClick={()=>getData(searchRequest)}/>
                <Checkbox label='image' onChange={(e)=>paramObject.image = e.target.checked} />
                <Checkbox label='video' onChange={(e)=>paramObject.video = e.target.checked} />
                <Checkbox label='audio' onChange={(e)=>paramObject.audio = e.target.checked} />
                <Button onClick={()=>getSearchParams(paramObject)} text='h'/>
            </div>
            <div className='media-search__container'>
            
                        <div className='media-columns'>
                                {searchResult.map((item, index)=>{
                                       
                                        while(index<26){
                                            return  <NASASEARCHitem
                                                        title={item.data[0].title}
                                                        src={item.links[0].href}
                                                        load={load}
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
                                                    /> 
                                        }
                                })} 
                        </div>
            </div>
        </div>
    )
}
export default NASAIMAGE