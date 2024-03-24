import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import HomeLayout from './components/HomeLayout';
import ProfileLayout from './components/ProfileLayout';
import Login from './components/Login';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <HomeLayout />
  },
  {
    path: '/profile',
    element: <ProfileLayout />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);