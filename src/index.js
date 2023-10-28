import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ForeCastPage from './Components/pages/ForeCastPage';
import CurrentPage from './Components/pages/CurrentPage';

// Create a router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<CurrentPage />} />
      <Route path="forecast" element={<ForeCastPage />} />
    </Route>
  )
);

const root = document.getElementById('root');

ReactDOM.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  root
);

// Measure performance using reportWebVitals
reportWebVitals();
