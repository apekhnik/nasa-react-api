import React,{useState, useEffect} from 'react'

const NasaData = () => {
    const [nasa, setNasa] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-07-12')
                                    .then(response=>response.json())
        console.log(response)
    }
    return(
        <div></div>
    )
}
export default NasaData