import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Error from './Error.tsx'
import Home from './Home.tsx'
import About from './About.tsx'
import '@govtechsg/sgds/css/sgds.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
