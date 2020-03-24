import React,{useState, useEffect} from 'react'
import APOD from '../container/nasaData/APOD';
import Container from '../component/Container/Container'
import ContainerItem from '../component/Container/ContainerItem'
import Loader from '../component/Loader/Loader';
import ControlForm from '../component/Form/Form';
import {DEFAULT_CURRENT_DAY,
        DEFAULT_PREV_DAY,
        DEFAULT_NEXT_DAY,
        MOUNTH_SLICE_SYMBOL_START,
        MOUNTH_SLICE_SYMBOL_FINISH,
        SLICE_START_POINT,
        SLICE_FINISH_POINT,
        YEAR_SLICE_FINISH_POINTS,
        MOUNTH_FINISH_NUM,
        DAY_JANUARY_FINISH_NUM} from '../constants'
import APODColumn from './APODColumn/APODColumn';
const APODpage =()=>{
    const [currentDay, setCurrentDay] = useState(DEFAULT_CURRENT_DAY)
    const [load, setLoad] = useState(false)
    const [stateRange, setRange] = useState({
                                        prev:DEFAULT_PREV_DAY,
                                        next:DEFAULT_NEXT_DAY
                                    })
    
    
    useEffect(()=>{
      
    },[])
    const countOfdaysInMounth = (day,arg) => {
      const mounth = arg === 'prev'?Number(day.slice(MOUNTH_SLICE_SYMBOL_START,MOUNTH_SLICE_SYMBOL_FINISH))-1:Number(day.slice(MOUNTH_SLICE_SYMBOL_START,MOUNTH_SLICE_SYMBOL_FINISH))
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
                setLoad(true)
                        for(let i=1;i<4;i++){
                          daysRangePrev.push(`${day.slice(SLICE_START_POINT,SLICE_FINISH_POINT)}${(Number(day.slice(SLICE_FINISH_POINT))-i)}`)
        
                        }
                        for(let i=1;i<4;i++){
                          daysRangeNext.push(`${day.slice(SLICE_START_POINT,SLICE_FINISH_POINT)}${(Number(day.slice(SLICE_FINISH_POINT))+i)}`)
                        }
                setCurrentDay(day)
                setRange({
                  prev:daysRangePrev, 
                  next:daysRangeNext
                })
                setTimeout(()=>{
                    setLoad(false)
                  },100)
               
    }
    const swipeNext = day =>{
      const nextDay = `${day.slice(SLICE_START_POINT,SLICE_FINISH_POINT)}${Number(day.slice(SLICE_FINISH_POINT))+1}`
      const mounth = Number(day.slice(MOUNTH_SLICE_SYMBOL_START,MOUNTH_SLICE_SYMBOL_FINISH)),
            year = Number(day.slice(SLICE_START_POINT,YEAR_SLICE_FINISH_POINTS))
      if(Number(day.slice(8))===countOfdaysInMounth(day, 'next')){
        if(mounth===12){
          onDayChange(`${year+1}-${1}-${1}`)
        }else{
          onDayChange(`${day.slice(SLICE_START_POINT,MOUNTH_SLICE_SYMBOL_START)}0${(mounth+1)}-${1}`)
        }
      }else{
        onDayChange(nextDay)
      }
    }
    const swipePrev = day =>{
      const preDays = `${day.slice(SLICE_START_POINT,SLICE_FINISH_POINT)}${Number(day.slice(SLICE_FINISH_POINT))-1}`
      let mounth = (Number(day.slice(6,MOUNTH_SLICE_SYMBOL_FINISH))),
          year = Number(day.slice(SLICE_START_POINT,YEAR_SLICE_FINISH_POINTS))
          if(Number(day.slice(SLICE_FINISH_POINT))-1===1){
                if(mounth===1){
                  onDayChange(`${year-1}-${(MOUNTH_FINISH_NUM)}-${DAY_JANUARY_FINISH_NUM}`)
                }else{
  
                  onDayChange(`${year}-0${(day.slice(6,MOUNTH_SLICE_SYMBOL_FINISH)-1)}-${countOfdaysInMounth(day,'prev')}`)
                }
          }else{
                onDayChange(preDays)
          }
      
    }
  
   
  
   
  
  
  
    
  
  
  
  
  
    if(load){
      return <Loader/>
    }
      return (
        <div className="App">
         <Container>
                  <ContainerItem>
                      {stateRange.prev.map((item)=>{
                          return <APOD
                              date={item.toString()}
                              size='min'
                              onClick={()=>{onDayChange(item.toString())}}
                            />
                      })}
                  </ContainerItem>
            <ContainerItem>
                  <ControlForm
                    inputType='date'
                    inputValue={currentDay}
                    inputOnchange={(e)=>{setCurrentDay(e.target.value)}}
                    onClickPrev={()=>{swipePrev(currentDay)}}
                    onClickNext={()=>{swipeNext(currentDay)}}
                    onClickLoad={()=>{onDayChange(currentDay)}}
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
            {/* <APODColumn items={stateRange} onClick={()=>{onDayChange}}/> */}
         </Container>
        </div>
      );
    
    
}
export default APODpage