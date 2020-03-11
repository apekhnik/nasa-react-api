import React, { useEffect, useState } from 'react'
import './NASAIMAGE.css'
const NASAIMAGE =()=>{
    const [searchRes, setSearchRes] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        try {
            const response1 = await fetch(`https://images-api.nasa.gov/search?q=bear&page=2`)
                  .then(response=>response.json())
                  console.log(response1)
                  console.log(response1.collection.items[6].links[0].href)
                  console.log(response1.collection.items[6].data[0].description)
                  console.log(response1.collection.items[6])
                  setSearchRes(response1.collection.items)
          } catch (error) {
            console.log(error)
          }
    }
    return(
        <div className='media-search'>
            <h1>NEW COMPONENT ATTENTION</h1>
           
            <div className='media-search__container'>
            {searchRes.map((item)=>{
               console.log(item.links[0].href)
               return <img src={item.links[0].href} alt=''/>
                
            })}
            </div>
        </div>
    )
}
export default NASAIMAGE