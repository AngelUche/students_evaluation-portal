import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components'
import { AdminPage } from './pages'

function App() {
  return (
    <Routes>

      {/* This path should direct user to the Login Page - you can change the element to yours */}
      <Route path="/" element={<Login />} />

      {/* This is the Admin route and it's sub routes - Don't modify */}
      <Route path='/admin/*' element={<AdminPage />} />

      {/* Add additional routes below*/}

    </Routes>
  )
}

export default App