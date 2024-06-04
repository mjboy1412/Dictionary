import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import History from './components/History.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import Search from './components/Search.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Dictionary/' element={<App />} >
      <Route path='/Dictionary/' element={<WelcomeScreen />} />
      <Route path='/Dictionary/search' element={<Search />} />
      <Route path='/Dictionary/search/:word' element={<Search />} />
      <Route path='/Dictionary/history' element={<History />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
