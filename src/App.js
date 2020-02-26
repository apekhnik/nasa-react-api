import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/APOD';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
const App =()=> {
  const [day, setMounth] = useState([10,12,13])
  const [fullDate, setFullDate] = useState('2017-10-10')
  const [load, setLoad] = useState(false)
  const test=(item)=>{
    setLoad(true)
    
    
    setTimeout(()=>{setLoad(false);setFullDate(`2012-01-${item}`);console.log(fullDate)},1000)
    console.log(item)
  }
  if(load){
    return <p>[eqyz</p>
  }
    return (
      <div className="App">
        
       <Container>
          <ContainerItem>
          {day.map((item)=>{
      return <APOD
          date={`2011-01-${item}`}
          size='min'
          onClick={()=>{test(item)}}
        />
      
    })}
          </ContainerItem>
          <ContainerItem>
            <APOD
              size="full"
              date={fullDate}
            />
          </ContainerItem>
          <ContainerItem>
          {day.map((item)=>{
            return <APOD
                date={`2012-01-${item}`}
                size='min'
                onClick={()=>{setFullDate(`2012-01-${item}`);console.log(`2012-01-${item}`)}}
                  />
          })}
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
