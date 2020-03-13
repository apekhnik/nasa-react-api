import React, { useEffect, useState } from 'react'
import './NASAIMAGE.css'
import Button from '../component/Button/Button'
import Title from '../component/Title/Title'
const NASAIMAGE =()=>{
    const [searchRes, setSearchRes] = useState([])
    const [searchRequest, setSearchRequest] = useState('')



    useEffect(()=>{
        getData()
    },[])


    const getData = async (request='moon')=>{
        try {
            const response1 = await fetch(`https://images-api.nasa.gov/search?q=${request}&page=2`)
                  .then(response=>response.json())
                  console.log(response1)
                  console.log(response1.collection.items[6].links[0].href)
                  console.log(response1.collection.items[6].data[0].description)
                  console.log(response1.collection.items)
                  setSearchRes(response1.collection.items)
                  
          } catch (error) {
            console.log(error)
          }
    }
    console.log(searchRes)
    return(
        <div className='media-search'>
            <h1>NEW COMPONENT ATTENTION</h1>
            <div className=''>
                <input type='text' onChange={(e)=>setSearchRequest(e.target.value)}/>
                <Button text='go' onClick={()=>getData(searchRequest)}/>
            </div>
            <div className='media-search__container'>
            
                        <div className='media-columns'>
                                {searchRes.map((item, index)=>{
                                       
                                        while(index<26){
                                            return   <div className='media-search__container__item' id={index}>
                                                        <Title title={item.data[0].title} id='nasa-title'/>
                                                        <img src={item.links[0].href} alt=''/>
                                                    </div>
                                        }
                                })}     
                        </div>
                        <div className='media-columns'>
                                {searchRes.map((item, index)=>{
                                        
                                        while(index>26&&index<51){
                                            return   <div className='media-search__container__item' id={index}>
                                                        <Title title={item.data[0].title} id='nasa-title'/>
                                                        <img src={item.links[0].href} alt=''/>
                                                    </div>
                                        }
                                })} 
                        </div>
                        <div className='media-columns'>
                                {searchRes.map((item, index)=>{
                                        
                                        while(index>50&&index<76){
                                            return   <div className='media-search__container__item' id={index}>
                                                        <Title title={item.data[0].title} id='nasa-title'/>
                                                        <img src={item.links[0].href} alt=''/>
                                                    </div>
                                        }
                                })} 
                        </div>
                        <div className='media-columns'>
                                {searchRes.map((item, index)=>{
                                        
                                        while(index>75&&index<101){
                                            return   <div className='media-search__container__item' id={index}>
                                                        <Title title={item.data[0].title} id='nasa-title'/>
                                                        <img src={item.links[0].href} alt=''/>
                                                    </div>
                                        }
                                })} 
                        </div>
            </div>
        </div>
    )
}
export default NASAIMAGE