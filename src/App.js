import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
const App =()=> {
  const [prevDays, setPrevDays] = useState([])
  const [nextDays, setNextDays] = useState([])
  
  
  // const [date, setDate] = useState('2015-05-07')
  



  const [mainDate, setMainDate] = useState('2015-05-08')
  const [load, setLoad] = useState(false)


        const prevItems =()=>{
          console.log(mainDate.slice(8))
          const items = []
          for(let i=1;i<4;i++){
            items.push(Number(mainDate.slice(8))-i)
            console.log((Number(mainDate.slice(8))-i))
            
          }
          console.log(items)
          setPrevDays(items)
          
          
        }
  const nextItems =(fullDate)=>{
    const items = []
    
    for(let i = 1; i < 4; i++){
      items.push(Number(fullDate.slice(8))+i)
    }
    setNextDays(items)
  }
  const reload = ()=>{
    setLoad(true)
    setTimeout(()=>{
      console.log(mainDate)
      prevItems(mainDate)
      // nextItems(mainDate)
      console.log(prevDays)
      // console.log(nextDays)
      setLoad(false)}
    ,2000)
    
    
  }
 
  
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
          {/* {prevDays.map((item)=>{
            console.log(item)
      return <APOD
          date={item.toString()}
          size='min'
          onClick={()=>{reloadFullApod(item)}}
        />
      
    })} */}
      
          </ContainerItem>
          <ContainerItem>
                <button>prev</button>
                <input type="date" onChange={(e)=>{setMainDate(e.target.value)}} value={mainDate}/>
                <button onClick={reload}/>
                
                <button>next</button>
                <APOD
                  size="full"
                  date={mainDate}
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
