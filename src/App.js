import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
import Button from './component/Button/Button'
import ControlForm from './component/Form/Form';
const App =()=> {

  const [currentDay, setCurrentDay] = useState('2015-05-08')
  const [load, setLoad] = useState(false)
  const [stateRange, setRange] = useState({
                                      prev:['2015-05-05','2015-05-06','2015-05-07'],
                                      next:['2015-05-09','2015-05-10','2015-05-11']
                                  })
  
  
  
  const countOfdaysInMounth = day => {
    const mounth = Number(day.slice(5,7))-1
    switch (mounth) {
      case 1:
        return 31;
      case 2:
        return 28;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
      default:
        break;
    }
  }
  const onDayChange =day=>{ 
          const daysRangePrev = [];
          const daysRangeNext = [];
          console.log(countOfdaysInMounth(day),'days count')
              setLoad(true)
                      for(let i=1;i<4;i++){
                        let incomingDay = (Number(day.slice(8))-i)===0?countOfdaysInMounth(day):Number(day.slice(8))-i
                        console.log(Number(day.slice(8))-i)
                        // switch (Number(day.slice(8))) {
                        //   case 4:
                        //      help = countOfdaysInMounth(day)
                        //     break;
                        //   case 3:
                        //      help = countOfdaysInMounth(day)-1
                        //     break;
                        //   case 2:
                        //      help = countOfdaysInMounth(day)-2
                        //     break;
                        //   case 3:
                        //      help = countOfdaysInMounth(day)-3
                        //     break;
                        //   default:
                        //     break;
                        // }
                        
                        let dayZ = (Number(day.slice(8))===4)?countOfdaysInMounth(day):(Number(day.slice(8))-i)
                        daysRangePrev.push(`${day.slice(0,8)}${incomingDay}`)
                        console.log(incomingDay)
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
                {/* <ControlForm
                  inputType='date'
                  inputValue={currentDay}
                  inputOnchange={(e)=>{setCurrentDay(e.target.value)}}
                  onClickPrev={()=>{swipePrev(currentDay)}}
                  onClickNext={()=>{swipeNext(currentDay)}}
                  onClickLoad={()=>{onDayChange(currentDay)}}
                /> */}
                <Button
                  text='PREV'
                  onClick={()=>{swipePrev(currentDay)}}
                />
                <input type="date" onChange={(e)=>{setCurrentDay(e.target.value);}} value={currentDay}/>
                
                <Button
                  text='GO!'
                  onClick={()=>{onDayChange(currentDay)}}
                />
              
                <Button
                  text='NEXT'
                  onClick={()=>{swipeNext(currentDay)}}
                />
                <APOD
                  size="full"
                  date={currentDay}
                />
          </ContainerItem>
          <ContainerItem>
          {
              stateRange.next.map((item)=>{
                      return <APOD
                      date={item.toString()}
                      size='min'
                      onClick={()=>{onDayChange(item.toString())}}
                      />})
          }
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
