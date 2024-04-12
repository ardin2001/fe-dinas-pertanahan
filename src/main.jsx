import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App';
import ErrorPage from './pages/Error';
import DashboardPage from './pages/Dashboard';
import RekapSuratPage from './pages/RekapSurat';
import ManajemenUserPage from './pages/ManajemenUser';
import SuratMasukPage from './pages/SuratMasuk';
import BalasanSuratPage from './pages/BalasanSurat';
import ProfilePage from './pages/Profile';
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
  {
    path: "/rekap-surat",
    element: <RekapSuratPage/>,
  },
  {
    path: "/manajemen-user",
    element: <ManajemenUserPage/>,
  },
  {
    path: "/balasan-surat",
    element: <BalasanSuratPage/>,
  },
  {
    path: "/surat-masuk",
    element: <SuratMasukPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
