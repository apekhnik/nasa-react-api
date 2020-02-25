import React, { useState, useEffect } from 'react';
import './App.css';
import APOD from './container/nasaData/NasaData';

const App =()=> {
  const [mounth, setMounth] = useState([1,2,3,4,5,6,7,8,9])
  const test=()=>{
    
  }
    return (
      <div className="App">
        
        {/* <APOD
          date='2011-01-14'
          size='min'
        /> */}
        {mounth.map((item)=>{
      console.log(item)
      return <APOD
          date={`2011-01-${item}`}
          size='min'
        />
      
    })}
        {/* <APOD
          date='2015-05-10'
          size='full'
        /> */}
       
      </div>
    );
  
}

export default App;
