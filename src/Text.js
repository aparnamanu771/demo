import {React,useState }from 'react'
import './Text.css'
function Text() {
  var [number,setNumber]=useState(100)
  function changeValue(){
    setNumber(number+1)
  }
  
  return (
    
    <>
    <h1>text</h1>
    <h1>test a new component</h1>
    <h3>{number}</h3>
    <button onClick={changeValue}>click</button >
    
    </>
    
  )
}

export default Text