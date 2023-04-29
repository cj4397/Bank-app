import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'

import Root from './routes/root.jsx';
import ErrorPage from './Error.jsx';

import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Home",
        element: <App />,
      },
    ],
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,




)
