import './App.css'
import {createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./styles.scss"

function App() {
  
  const Layout = ()=>{
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },

     {
      path: "/register",
       element: <Register/>,
    },

     {
      path: "/home",
       element: <Layout/>,
      children: [
        {
          path:"/home",
          element: <Home/>
        }
      ]
    },

     {
      path: "/post/:id",
       element: <Layout/>,
      children: [
        {
          path:"/post/:id",
          element: <Single/>
        }
      ]
    },

     {
      path: "/write",
       element: <Layout/>,
      children: [
        {
          path:"/write",
          element: <Write/>
        }
      ]
    },

  ])

  return (
    <>
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
     
    </>
  )
}

export default App
