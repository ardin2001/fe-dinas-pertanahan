import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { data } from "../../utils/DataManagemenUser";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { GetData } from "../../utils/FetchmanagemenUser";
const ManajemenUserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const { status, data } = await GetData();
      console.log(data);
      if (status) {
        setUsers(data);
      }
    })();
  }, []);
  const [search, setSearch] = useState();
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-sans">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Manajemen User</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl drop-shadow-custom p-6">
          <div className="search flex gap-4 justify-between">
            <div className="left w-1/3 flex relative">
              <input
                type="text"
                className="outline-none rounded-lg w-full outline-2 outline-quaternary text-quaternary outline-offset-0 text-base py-1 px-2 italic"
                onChange={HandlerSearch}
                value={search}
                placeholder="Cari user..."
              />
              <FaSearch className="absolute right-2 top-3 text-secondary" />
            </div>
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center px-5">
              <div className="grid grid-flow-col gap-2 items-center py-2">
                <GoPlus size="1rem" />
                <p>Tambah User</p>
              </div>
            </div>
          </div>
          <div className="tabel mt-7">
            <table className="table-auto w-full text-center text-sm font-normal font-sans">
              <thead className="text-white font-medium bg-secondary ">
                <tr>
                  <th className="py-2">No</th>
                  <th className="py-2">Nama</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Role</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 == 0 ? "bg-quinary" : null} `}
                  >
                    <td className="py-2.5 text-sm">{item.id}</td>
                    <td className="py-2.5 text-sm">{item.name}</td>
                    <td className="py-2.5 text-sm">{item.email}</td>
                    <td className="py-2.5 text-sm">{item.type}</td>
                    <td className="py-2.5 text-sm grid justify-items-center">
                      <p
                        className={`${
                          item.email_verified_at
                            ? "bg-green-200 text-green-500"
                            : "bg-red-300 text-red-600"
                        } w-1/2 rounded-lg text-xs py-1`}
                      >
                        {item.status ? "Aktif" : "Tidak Aktif"}
                      </p>
                    </td>
                    <td className="py-2">
                      <div className="aksi flex justify-center gap-2">
                        <MdModeEdit className="text-secondary" />
                        <IoMdEye className="text-yellow-300" />
                        <MdDeleteOutline className="text-red-500" />
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
