import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/NasaData';
import Container from './component/Container/Container'
import ContainerItem from './component/Container/ContainerItem'
const App =()=> {
  const [mounth, setMounth] = useState([10,12,13,14])
  const test=()=>{
    
  }
    return (
      <div className="App">
        
       <Container>
          <ContainerItem>
          {mounth.map((item)=>{
      console.log(item)
      return <APOD
          date={`2011-01-${item}`}
          size='min'
        />
      
    })}
          </ContainerItem>
          <ContainerItem>
            iksgkdjgksjdkfjskdjfksdjfksjdfk
          </ContainerItem>
          <ContainerItem>
          {mounth.map((item)=>{
      console.log(item)
      return <APOD
          date={`2011-01-${item}`}
          size='min'
        />
      
    })}
          </ContainerItem>
       </Container>
      </div>
    );
  
}

export default App;
