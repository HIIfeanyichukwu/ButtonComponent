import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <p>
       Hello, from App.jsx;
     </p>
    </div>
  )
}

export default App