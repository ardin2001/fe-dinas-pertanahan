import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
} from "recharts";
import { GetDashboard } from "../../utils/FetchChartDashboard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Chart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetDashboard()
      .then((res) => {
        const { label, jumlah, jumlahkeluar } = res.data.surat_per_hari;
        const transformedData = label.map((day, index) => ({
          name: day,
          letters: parseInt(jumlah[index], 10), // Convert string to integer
          lettersOut: parseInt(jumlahkeluar[index], 10), // Convert string to integer
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="col-span-3 p-1 max-h-[360px]">
      <p className="text-xl font-semibold leading-[30px]">Statistik</p>
      <div className="flex justify-between">
        <p className="text-sm text-[#777980]">Persuratan dalam seminggu</p>
        <div className="flex gap-4">
          <div className="flex gap-[6px]">
            <div className="w-3 h-3 rounded-full bg-secondary my-auto" />
            <p className="text-xs font-medium text-[#667085] my-auto">
              Surat Masuk
            </p>
          </div>
          <div className="flex gap-[6px]">
            <div className="w-3 h-3 rounded-full bg-tertiary my-auto" />
            <p className="text-xs font-medium text-[#667085] my-auto">
              Surat Keluar
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <Skeleton count={1} width={1100} height={340} baseColor="#DEDEDE" />
      ) : (
        <LineChart
          width={1100}
          height={360}
          data={data}
          margin={{ top: 25, right: 45, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey="letters"
            stroke="#3B6F9E"
            name="Surat Masuk"
          />
          <Line
            type="monotone"
            dataKey="lettersOut"
            stroke="#FFA500"
            name="Surat Keluar"
          />
        </LineChart>
      )}
    </div>
  );
};

export default Chart;