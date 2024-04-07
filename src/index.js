import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import ProfileLayout from './components/ProfileLayout';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import { AuthContextProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import SearchPage from './components/SearchPage';
import "./App.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/login',
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
    path: '/profile/:userID',
    element: <PrivateRoute component={ProfileLayout} />
  },
  {
    path: '/search',
    element: <PrivateRoute component={SearchPage} />
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