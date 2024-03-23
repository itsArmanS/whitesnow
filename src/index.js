import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import HomeLayout from './components/HomeLayout';
import ProfileLayout from './components/ProfileLayout';

const router = createBrowserRouter([
  {
    path: '/',
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