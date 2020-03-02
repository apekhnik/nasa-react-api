import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
import Button from './component/Button/Button'
const App =()=> {
<<<<<<< HEAD
=======

>>>>>>> 90ad0749475b791f1d39f19973f9db439de094a7
  const [currentDay, setCurrentDay] = useState('2015-05-08')
  const [load, setLoad] = useState(false)
  const [stateRange, setRange] = useState({
                                      prev:['2015-05-05','2015-05-06','2015-05-07'],
                                      next:['2015-05-09','2015-05-10','2015-05-11']
                                  })
  
  
  
  
  const onDayChange =day=>{ 
          const daysRangePrev = [];
          const daysRangeNext = [];
              setLoad(true)
                      for(let i=1;i<4;i++){
                        daysRangePrev.push(`${day.slice(0,8)}${(Number(day.slice(8))-i)}`)
                        console.log(`${day.slice(0,8)}${(Number(day.slice(8))-i)}`)
                      }
                      for(let i=1;i<4;i++){
                        daysRangeNext.push(`${day.slice(0,8)}${(Number(day.slice(8))+i)}`)
                      }
              setCurrentDay(day)
              setRange({
                prev:daysRangePrev, 
                next:daysRangeNext
              })
              setTimeout(()=>{
                  console.log(stateRange)
                  setLoad(false)
                },1500)
             
  }
  const swipeNext = day =>{
    const nextDay = `${day.slice(0,8)}${Number(day.slice(8))+1}`
    onDayChange(nextDay)
  }
  const swipePrev = day =>{
    const preDays = `${day.slice(0,8)}${Number(day.slice(8))-1}`
    onDayChange(preDays)
  }

 

  useEffect(()=>{

  },[])



  

<<<<<<< HEAD
=======

>>>>>>> 90ad0749475b791f1d39f19973f9db439de094a7



  if(load){
    return <Loader/>
  }
    return (
      <div className="App">
        
       <Container>
          <ContainerItem>
          {stateRange.prev.map((item)=>{
            console.log(item)
      return <APOD
          date={item.toString()}
          size='min'
          onClick={()=>{onDayChange(item.toString())}}
        />
      
    })}
     
          </ContainerItem>
          <ContainerItem>
                <Button
                  text='PREV'
                  onClick={()=>{swipePrev(currentDay)}}
                />
                <input type="date" onChange={(e)=>{setCurrentDay(e.target.value);}} value={currentDay}/>
                
                <Button
                  text='GO!'
                  onClick={()=>{onDayChange(currentDay)}}
                />
<<<<<<< HEAD
                <button>next</button>
=======
              
                <Button
                  text='NEXT'
                  onClick={()=>{swipeNext(currentDay)}}
                />
>>>>>>> 90ad0749475b791f1d39f19973f9db439de094a7
                <APOD
                  size="full"
                  date={currentDay}
                />
          </ContainerItem>
          <ContainerItem>
<<<<<<< HEAD
          {stateRange.next.map((item)=>{

      return <APOD
          date={item.toString()}
          size='min'
          // onClick={()=>{loadFull(item)}}
          onClick={()=>{onDayChange(item.toString())}}
        />
      
          })}
=======
          {
              stateRange.next.map((item)=>{
                      return <APOD
                      date={item.toString()}
                      size='min'
                      onClick={()=>{onDayChange(item.toString())}}
                      />})
          }
>>>>>>> 90ad0749475b791f1d39f19973f9db439de094a7
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
