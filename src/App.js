
import { useState } from 'react';
import './App.css';
import CounterClass from './Components/CounterClass';
import Counterfunction from './Components/Counterfunction';
import User from './Components/User';
import Employee from './Components/Employee';


function App() {
  //const[counter,setCounter]=useState(0);  counter -state  -- to store values

  const [username,setUsername]=useState('ആടു തോമ');
  const [age,setAge]=useState('28')
 
  return (
    <div className="App">
      <header className="App-header">

      <Counterfunction />
      <CounterClass/>

      <h2>How to share data</h2>

      <User username={username} age={age}/>

      <Employee/>
      
        
      </header>
    </div>
  );
}

export default App;
