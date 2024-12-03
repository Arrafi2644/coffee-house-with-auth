import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainTemplate from './components/MainTemplate.jsx';
import Users from './components/Users.jsx';
import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import AddUser from './components/AddUser.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ViewPage from './components/ViewPage.jsx';
import AuthProvider from './AuthProvider.jsx';
import SignUp from './components/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate></MainTemplate>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=>fetch('https://coffee-house-server-iota.vercel.app/users')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=>fetch(`https://coffee-house-server-iota.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/viewPage/:id",
        element: <ViewPage></ViewPage>,
        loader: ({params})=> fetch(`https://coffee-house-server-iota.vercel.app/coffees/${params.id}`)
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
