import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { dn, num, sm, up } from './data/passchar';

function App() {
let [uppercase,setUppercase]=useState(false)  
let [lowercase,setLowercase]=useState(false)  
let [number,setNumber]=useState(false)  
let [symbols,setSymbols]=useState(false) 
let [passlen,setPasslen]=useState(10) 
let [fpass,setFpass]=useState('')

let checkpas=()=>{
  let finpas=''
  let chrset=''
  if(uppercase||lowercase||number||symbols){
    if(uppercase) chrset+=up;
    if(lowercase) chrset+=dn;
    if(number) chrset+=num;
    if(symbols) chrset+=sm;
    for(let i=0;i<passlen;i++){
      finpas+=chrset.charAt(Math.floor(Math.random()*chrset.length))
    }
    setFpass(finpas)
  }
  else{
    alert("Check it!")
  }
}

let coppas=()=>{
  navigator.clipboard.writeText(fpass)
}
  return (
    <div className="passbox">
       <h2>Password Generator</h2> 
       <div className="passin">
        <input type="text" value={fpass}readOnly></input> <button onClick={coppas}>Copy</button>
       </div>  
       <div className="passlen">
        <label>Password length</label>
        <input type="number" max={20} min={0} value={passlen} onChange={(event)=>setPasslen(event.target.value)} ></input>
       </div>
       <div className="passlen">
        <label>Include uppercase</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}></input>
       </div>
       <div className="passlen">
        <label>Include lowercase</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}></input>
       </div>
       <div className="passlen">
        <label>Include numbers</label>
        <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}></input>
       </div>
       <div className="passlen">
        <label>Include symbols</label>
        <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)} ></input>
       </div>
       <button className="genbut" onClick={checkpas}>Generate password</button>
    </div>
  );
}

export default App;
