import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Error from './pages/Error'
import Sharedlayout from './pages/Sharedlayout'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Sharedlayout />}>
          <Route index element={<Home/>}/>
          <Route path='/:urlUsername' element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App