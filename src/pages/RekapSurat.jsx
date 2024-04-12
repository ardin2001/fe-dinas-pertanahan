import Sidebar from "../components/Sidebar";
import { useState } from "react";
import FormatDate from "../utils/Date";
import { FaSearch } from "react-icons/fa";
import { data } from "../utils/DataRekapSurat";

const RekapSuratPage = () => {
  const [kategori, setKategori] = useState("Kategori Surat");
  const [tanggal, setTanggal] = useState(FormatDate());
  const Handlerkategori = (e) => {
    setKategori(e.target.value);
  };
  const HandlerTanggal = (e) => {
    setTanggal(e.target.value);
  };
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary">
      {console.log("tanggal :", tanggal)}
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Rekap Surat</h2>
        </div>
        <div className="rekap mt-8 bg-white h-4/5 rounded-xl drop-shadow-custom p-6">
          <div className="search grid grid-flow-col grid-cols-8 gap-8">
            <div className="left col-start-1 col-end-8 grid grid-cols-2 gap-4">
              <div className="kategori">
                <select
                  id="month"
                  onChange={Handlerkategori}
                  className="font-semibold outline-none rounded-md w-full outline-2 py-2 outline-secondary text-secondary outline-offset-0 text-sm p-1"
                >
                  <option className="font-semibold" value="Kategori Surat">Kategori Surat</option>
                  <option className="font-semibold" value="penting">Penting</option>
                  <option className="font-semibold" value="biasa">Biasa</option>
                  <option className="font-semibold" value="tidak penting">Tidak Penting</option>
                </select>
              </div>
              <div className="tanggal">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={tanggal}
                  className="font-semibold outline-none rounded-md w-full outline-2 py-2 outline-secondary text-secondary outline-offset-0 text-sm p-1"
                  onChange={HandlerTanggal}
                />
              </div>
            </div>
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center">
              <div className="grid grid-flow-col w-10/12 gap-2 items-center">
                <FaSearch size="1.1rem" />
                <p>Cari</p>
              </div>
            </div>
          </div>
          <div className="tabel mt-5">
            <table className="table-fixed w-full text-center">
              <thead className="text-white font-semibold bg-secondary">
                <tr>
                  <th className="py-2">No</th>
                  <th className="py-2">Pengirim</th>
                  <th className="py-2">Keterangan</th>
                  <th className="py-2">Tanggal</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Draft</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (                  
                  <tr key={index} className={`${(index+1) % 2 == 0 ? "bg-quinary" : null} `}>
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">{item.pengirim}</td>
                    <td className="py-2">{item.keterangan}</td>
                    <td className="py-2">{item.tanggal}</td>
                    <td className="py-2">{item.status}</td>
                    <td className="py-2">{item.draft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RekapSuratPage;
