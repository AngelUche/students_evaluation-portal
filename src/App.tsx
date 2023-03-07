import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components'
import { AdminPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/admin' element={<AdminPage />} >
      </Route>
    </Routes>
  )
}

export default App