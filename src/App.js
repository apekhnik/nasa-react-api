import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
import Button from './component/Button/Button'
const App =()=> {
<<<<<<< HEAD
  
  // const [nextDays, setNextDays] = useState([])
  // const [date, setDate] = useState('2015-05-07')
  const [currentDay, setCurrentDay] = useState('2015-05-08')
  const [load, setLoad] = useState(false)

  const daysRange = [];
        const onDayChange =day=>{ 
              setLoad(true)
              console.log(day)
               
                setLoad(false)
        }
        
        // const reload = ()=>{
        //   setLoad(true)
        //   setTimeout(()=>{
        //     console.log(mainDate)
        //     prevItems(mainDate)
        //     // nextItems(mainDate)
        //     console.log(prevDays)
        //     // console.log(nextDays)
        //     setLoad(false)}
        //   ,2000)
          
          
        // }
 
  //       const nextItems =(fullDate)=>{
  //   const items = []
    
  //   for(let i = 1; i < 4; i++){
  //     items.push(Number(fullDate.slice(8))+i)
  //   }
  //   setNextDays(items)
  // }
  
  

 
  
  useEffect(()=>{
      // prevItems(mainDate)
      // nextItems(mainDate)
  },[])
  // const reloadFullApod=()=>{
  //   setLoad(true)
    
  //   prevItems(date)
  //   nextItems(date)
  //   setTimeout(()=>{
  //     setFullDate();
  //     setLoad(false);
  //   },1000)
    
  // }


  

// const loadFull=(date)=>{
//  console.log(date, 'clicking')
//     setLoad(true)

//     setTimeout(()=>{
//       setDate(date)
//       setFullDate(date);
//       prevItems(date)
//       nextItems(date)
//       reloadFullApod()
//       setLoad(false);
//     },1000)
// }
=======
  const [currentDay, setCurrentDay] = useState('2015-05-08')
  const [load, setLoad] = useState(false)
  const [stateRange, setRange] = useState({prev:[],next:[]})
  
  
  
  
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

  

 
  
  useEffect(()=>{

  },[])



  

>>>>>>> origin



  if(load){
    return <Loader/>
  }
    return (
      <div className="App">
        
       <Container>
          <ContainerItem>
<<<<<<< HEAD
          {daysRange.map((item)=>{
=======
          {stateRange.prev.map((item)=>{
>>>>>>> origin
            console.log(item)
      return <APOD
          date={item.toString()}
          size='min'
<<<<<<< HEAD
          // onClick={()=>{reloadFullApod(item)}}
        />
      
    })}
      
          </ContainerItem>
          <ContainerItem>
                <button>prev</button>
                <input type="date" onChange={(e)=>{setCurrentDay(e.target.value)}} value={currentDay}/>
                <button onClick={()=>onDayChange(currentDay)}/>
                
=======
          onClick={()=>{onDayChange(item.toString())}}
        />
      
    })}
     
          </ContainerItem>
          <ContainerItem>
                <button>prev</button>
                <input type="date" onChange={(e)=>{setCurrentDay(e.target.value);}} value={currentDay}/>
                
                <Button
                  text='GO!'
                  onClick={()=>{onDayChange(currentDay)}}
                />
>>>>>>> origin
                <button>next</button>
                <APOD
                  size="full"
                  date={currentDay}
                />
          </ContainerItem>
          <ContainerItem>
<<<<<<< HEAD
          {/* {nextDays.map((item)=>{
            console.log(item,'right side')
=======
          {stateRange.next.map((item)=>{

>>>>>>> origin
      return <APOD
          date={item.toString()}
          size='min'
          // onClick={()=>{loadFull(item)}}
<<<<<<< HEAD
          onClick={()=>{loadFull(item.toString())}}
        />
      
          })} */}
=======
          onClick={()=>{onDayChange(item.toString())}}
        />
      
          })}
>>>>>>> origin
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
