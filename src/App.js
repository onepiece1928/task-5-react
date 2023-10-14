import './App.css';
import { useState } from 'react';

function App() {

  const [result,setResult] = useState('')

  const [date,setDate] = useState(null)

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input type="date" onChange={(e)=>{
        setDate(e.target.value)
      }} />
      <button onClick={()=>{
        let birthDate = new Date(date)
        let today = new Date()
        let age = today.getFullYear() - birthDate.getFullYear()
        setResult(`Your age is ${age}`)
      }}
      style={{
        backgroundColor: 'blue',
        color: 'white',
        display: 'block',
        border: 'none',
        padding: '5px',
        marginTop: '10px'
      }} 
      >Calculate age</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;