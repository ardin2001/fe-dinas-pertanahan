import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import ErrorPage from "./pages/Error";
import DashboardPage from "./pages/Dashboard";
import RekapSuratPage from "./pages/rekap-surat/RekapSurat";
import ManajemenUserPage from "./pages/manajemen-user/ManajemenUser";
import SuratMasukPage from "./pages/persuratan/SuratMasuk";
import BalasanSuratPage from "./pages/persuratan/BalasanSurat";
import ProfilePage from "./pages/profile/Profile";
import DisposisiSuratPage from "./pages/persuratan/DisposisiSurat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DaftarBalasanPage from "./components/BalasanSuratUser";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/rekap-surat",
    element: <RekapSuratPage />,
  },
  {
    path: "/manajemen-user",
    element: <ManajemenUserPage />,
  },
  {
    path: "/balasan-surat",
    element: <BalasanSuratPage />,
  },
  {
    path: "/surat-masuk",
    element: <SuratMasukPage />,
  },
  {
    path: "/surat-masuk/daftar-balasan/:id",
    element: <DaftarBalasanPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/surat-masuk/disposisi-surat/:id",
    element: <DisposisiSuratPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
  // </React.StrictMode>,
);
