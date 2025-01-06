import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserTable from './components/UserTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="App">
      <h1>User Management</h1>
      <UserTable />
    </div>
    </>
  )
}

export default App
