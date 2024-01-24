import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users'
import Createuser from './components/Createuser'
import Updateuser from './components/Updateuser'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users></Users>}></Route>
      <Route path='/create' element={<Createuser></Createuser>}></Route>
      <Route path='/update/:id' element={<Updateuser></Updateuser>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
      
  )
}

export default App
