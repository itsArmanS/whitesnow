import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import ProfileLayout from './components/ProfileLayout';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import { AuthContextProvider } from './components/AuthContext';
import "./App.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />
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
  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  </AuthContextProvider>

);