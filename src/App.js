
import './App.css';
import Text from './Text';
import {Comp1,Comp2} from './Comp1';
import {React,useState} from 'react'

function App() {
  var[data,setData]=useState("hello world")
  return (
    <div className="App">
      <h1> my first react project</h1>
      <h2> { data } </h2> 
      <Text></Text>
      <Comp1></Comp1>
      <Comp2></Comp2>
     
      

      

      
      

    </div>
  );
}

export default App;
