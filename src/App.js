import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
import Loader from './component/Loader/Loader';
const App =()=> {
  const [day, setMounth] = useState([10,12,13])
  const [day1, setMounth1] = useState([2,3,5])
  const [fullDate, setFullDate] = useState('2017-10-10')
  const [load, setLoad] = useState(false)
  const [date, setDate] = useState('')
  
  
  
  const reloadFullApod=(item)=>{
    setLoad(true)
    setFullDate(`0`);
    console.log(fullDate,'bil')
    setTimeout(()=>{
      setFullDate(`2011-01-${item}`);
      setLoad(false);
    },1000)
    console.log(fullDate,'stal');
  }
const loadFull=()=>{
 console.log(typeof date)
    setLoad(true)

    setTimeout(()=>{
      setFullDate(date);
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
          {day.map((item)=>{
      return <APOD
          date={`2011-01-${item}`}
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
          {day1.map((item)=>{
           
            return <APOD
                date={`2011-01-${item}`}
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
