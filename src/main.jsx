import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'

import Root from './routes/root.jsx';
import ErrorPage from './routes/Error.jsx';

import Main_body from './main_body.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Billing from './pages/Billing.jsx'
import Profile from './pages/Profile.jsx'
import Notifications from './pages/Notification.jsx'
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
  },

  {
    path: "/Home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Main",
        element: <Main_body />,

        children: [
          {
            path: "Dashboard",
            element: <Dashboard />,
          },
          {
            path: "Billing",
            element: <Billing />,
          },
          {
            path: "Notifications",
            element: <Notifications />,
          },
          {
            path: "Profile",
            element: <Profile />,
          },

        ]


      },
    ],
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,




)
