import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBalasanSuratSpesifik } from "../utils/FetchBalasanSurat";
import { FaSearch } from "react-icons/fa";

const DaftarBalasanPage = () => {
  let { id } = useParams();
  const [replies, setReplies] = useState([]);
  const [search, setSearch] = useState("");
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    GetBalasanSuratSpesifik(id)
      .then((res) => {
        setReplies(res.data.replyletter || []);
      })
      .catch((error) => {
        console.error("Error fetching replies:", error);
        setReplies([]); // Ensure replies is set to an empty array in case of an error
      });
  }, [id]);

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-poppins">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Daftar Balasan Surat</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl p-6">
          <div className="left w-1/3 flex relative">
            <input
              type="text"
              className="outline-none rounded-lg w-full outline-2 outline-quaternary text-quaternary outline-offset-0 text-xs py-3 px-3 font-light italic"
              onChange={HandlerSearch}
              value={search}
              placeholder="Cari disini..."
            />
            <FaSearch className="absolute right-2 top-3 text-secondary" />
          </div>
          <div className="mt-7 h-5/6 overflow-x-auto">
            {replies.length === 0 ? (
              <p className="text-custom">Tidak ada balasan</p>
            ) : (
              <table className="table-auto w-full text-center text-sm font-normal font-sans">
                <thead className="text-white font-medium bg-secondary">
                  <tr className="border-b-2 border-secondary">
                    <th className="py-2">No</th>
                    <th className="py-2">Pengirim</th>
                    <th className="py-2">Keterangan</th>
                    <th className="py-2">Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {replies.map((reply, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-quinary" : ""}`}
                    >
                      <td className="py-2.5">{index + 1}</td>
                      <td className="p-2">{reply.from}</td>
                      <td className="p-2">{reply.note}</td>
                      <td className="p-2">{reply.outgoing_letter_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DaftarBalasanPage;
