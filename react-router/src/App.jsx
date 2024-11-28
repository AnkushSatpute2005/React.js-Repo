import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
// import {craeteBrowserRouter} from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },{
      path:"/about",
      element:<><Navbar/><About/></>
    },{
      path:"/user/:username",//if you want to take username as a variable so you can use "useParams" in react-router-dom,if you search "/user/ankush" it shows 'i am user ankush'
      element:<><Navbar/><User/></>
    },
  ])
  // const router = redirect([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/login",
  //     element:<Login/>
  //   }
  // ])
  return (
    <>
      
      <RouterProvider router= {router}/>
    </>
  )
}

export default App
