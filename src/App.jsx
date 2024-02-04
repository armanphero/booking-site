import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './pages/Banner'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Banner />
      <Outlet />
      <Toaster />
    </>
  )
}

export default App
