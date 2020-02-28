import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
const App =()=> {
  const [prevDays, setPrevDays] = useState([])
  const [nextDays, setNextDays] = useState([])
  const [fullDate, setFullDate] = useState('2017-05-04')
  const [load, setLoad] = useState(false)
  const [date, setDate] = useState('2017-05-04')

  const prevItems =(fullDate)=>{
    setLoad(true)
    const currentDay = fullDate.slice(8)
    const days = []
    console.log(fullDate)
    for(let i = 1; i<4;i++){
      days.push(fullDate.slice(0,8) +(currentDay-i))
    }
    console.log(days)
    setPrevDays(days)
    setLoad(false)
  }
  const nextItems =(fullDate)=>{
          const currentDay = fullDate.slice(8)
          const days = []
          console.log(fullDate.slice(0,8))
          for(let i = 1; i<4;i++){
            days.push(fullDate.slice(0,8)+(Number(currentDay)+i))
            console.log(currentDay+i)
          }
          console.log(days)
         setNextDays(days)
  }
  useEffect(()=>{
    // setFullDate('2019-05-04')
    nextItems(date)
    prevItems(date)
  },[])
  const reloadFullApod=(item)=>{
    setLoad(true)
    
    prevItems(date)
    nextItems(date)
    setTimeout(()=>{
      setFullDate(`2011-01-${item}`);
      setLoad(false);
    },1000)
   
  }


  

const loadFull=()=>{
 console.log(typeof date)
    setLoad(true)

    setTimeout(()=>{
      prevItems(date)
      nextItems(date)
      setFullDate(date);
      reloadFullApod()
      setLoad(false);
    },1000)
  
  
    
}



  if(load){
    return <Loader/>
  }
    return (
      <div className="App">
        
       <Container>
          <ContainerItem>
          {prevDays.map((item)=>{
            console.log(item)
      return <APOD
          date={item.toString()}
          size='min'
          onClick={()=>{reloadFullApod(item)}}
        />
      
    })}
      
          </ContainerItem>
          <ContainerItem>
          <input type="date" onChange={(e)=>{setDate(e.target.value);console.log(typeof date)}} value={date}/>
            <button onClick={loadFull}/>
            <APOD
              size="full"
              date={fullDate}
            />
            
          </ContainerItem>
          <ContainerItem>
          {nextDays.map((item)=>{
            console.log(item)
      return <APOD
          date={item.toString()}
          size='min'
          onClick={()=>{reloadFullApod(item)}}
        />
      
          })}
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
