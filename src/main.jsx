import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App';
import ErrorPage from './pages/Error';
import DashboardPage from './pages/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
