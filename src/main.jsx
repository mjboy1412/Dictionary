import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import History from './components/History.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import Search from './components/Search.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<WelcomeScreen />} />
      <Route path='search' element={<Search />} />
      <Route path='history' element={<History />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
);
