import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CardDashboard from "../components/CardDashboard";
import Chart from "../components/charts/Charts";
import { GetDashboard } from "../utils/FetchChartDashboard";

const DashboardPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      GetDashboard()
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200 font-poppins">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar flex justify-between pt-5">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <button
            id="month"
            className="pr-6 font-normal outline-none rounded-md text-sm p-1 bg-white rounded-xl text-center px-5 py-2 text-semibold"
          >
            Notifikasi
          </button>
        </div>
        <div className="rekap grid gap-10 grid-flow-col grid-cols-4 mt-8 font-semibold text-base">
          <CardDashboard
            title="Surat Masuk"
            count={data?.totalsurat}
            description="Total Seluruh Surat Masuk"
          />
          <CardDashboard
            title="Belum Ditindaklanjuti"
            count={data?.belum_ditindaklanjuti}
            description="Surat Belum Diproses"
          />
          <CardDashboard
            title="Sudah Didisposisi"
            count={data?.sudah_didisposisi}
            description="Surat Sudah Dialihkan"
          />
          <CardDashboard
            title="Sudah Ditindaklanjuti"
            count={data?.sudah_ditindaklanjuti}
            description="Surat Sudah Selesai"
          />
        </div>
        <div className="rekap mt-8 bg-white h-3/5 rounded-xl drop-shadow-custom p-4">
          <Chart />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
