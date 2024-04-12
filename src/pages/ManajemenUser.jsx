import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { data } from "../utils/DataManagemenUser";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
const ManajemenUserPage = () => {
  const [search, setSearch] = useState();
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Rekap Surat</h2>
        </div>
        <div className="rekap mt-8 bg-white h-4/5 rounded-xl drop-shadow-custom p-6">
          <div className="search flex gap-4 justify-between">
            <div className="left w-1/3 flex relative">
              <input
                type="text"
                className="outline-none rounded-md w-full outline-2 outline-secondary text-secondary outline-offset-0 text-base py-1 px-2"
                onChange={HandlerSearch}
                value={search}
                placeholder="cari surat..."
              />
              <FaSearch className="absolute right-2 top-3 text-secondary" />
            </div>
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center px-5">
              <div className="grid grid-flow-col gap-2 items-center py-2">
                <FaSearch size="1.1rem" />
                <p>Tambah User</p>
              </div>
            </div>
          </div>
          <div className="tabel mt-5">
            <table className="table-fixed w-full text-center">
              <thead className="text-white font-semibold bg-secondary">
                <tr>
                  <th className="py-2">No</th>
                  <th className="py-2">Nama</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Nomor Telepon</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 == 0 ? "bg-quinary" : null} `}
                  >
                    <td className="py-2">{item.no}</td>
                    <td className="py-2">{item.nama}</td>
                    <td className="py-2">{item.email}</td>
                    <td className="py-2">{item.notelp}</td>
                    <td className="py-2 grid justify-items-center">
                      <p
                        className={`${
                          item.status ? "bg-green-500" : "bg-red-500"
                        } text-white w-1/2 rounded-lg text-xs py-1`}
                      >
                        {item.status ? "Aktif" : "Tidak Aktif"}
                      </p>
                    </td>
                    <td className="py-2">
                      <div className="aksi flex justify-center gap-2">
                        <MdModeEdit className="text-secondary"/>
                        <IoMdEye className="text-yellow-300"/>
                        <MdDeleteOutline className="text-red-500"/>
                      </div>
                    </td>
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

export default ManajemenUserPage;
