import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
const App =()=> {
  
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



  if(load){
    return <Loader/>
  }
    return (
      <div className="App">
        
       <Container>
          <ContainerItem>
          {daysRange.map((item)=>{
            console.log(item)
      return <APOD
          date={item.toString()}
          size='min'
          // onClick={()=>{reloadFullApod(item)}}
        />
      
    })}
      
          </ContainerItem>
          <ContainerItem>
                <button>prev</button>
                <input type="date" onChange={(e)=>{setCurrentDay(e.target.value)}} value={currentDay}/>
                <button onClick={()=>onDayChange(currentDay)}/>
                
                <button>next</button>
                <APOD
                  size="full"
                  date={currentDay}
                />
          </ContainerItem>
          <ContainerItem>
          {/* {nextDays.map((item)=>{
            console.log(item,'right side')
      return <APOD
          date={item.toString()}
          size='min'
          // onClick={()=>{loadFull(item)}}
          onClick={()=>{loadFull(item.toString())}}
        />
      
          })} */}
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
