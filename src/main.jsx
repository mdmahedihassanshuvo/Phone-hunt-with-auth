import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Stor from './components/Stor.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import StorDetails from './components/StorDetails.jsx';
import UserProvider from './AuthProvider/UserProvider.jsx';
import PrivateRoute from './PrivetRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/stor',
        element: <Stor></Stor>,
        loader: () => fetch('/phones.json')
      },
      {
        path: 'storDetails',
        element: <PrivateRoute><StorDetails></StorDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
