import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { data } from "../utils/DataSuratMasuk";
const DisposisiSuratPage = () => {
  const [search, setSearch] = useState();
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-sans">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Disposisi Surat</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl drop-shadow-custom p-6">
          <div className="search flex gap-4 justify-end">
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center px-5">
              <div className="grid grid-flow-col gap-2 items-center py-2">
                <GoPlus size="1rem" />
                <p>Tambah Disposisi</p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-quinary rounded-xl grid grid-flow-col grid-cols-2 py-4 px-6">
            <div className="left grid gap-3">
              <div className="tanggal">
                <p className="font-bold">Tanggal Disposisi</p>
                <h4 className="text-lg font-light pl-3">11 Maret 2024</h4>
              </div>
              <div className="disposisi">
                <p className="font-bold">Disposisi</p>
                <h4 className="text-lg font-light pl-3">Seksi 1</h4>
              </div>
            </div>
            <div className="right">
              <div className="catatan">
                <p className="font-bold">Catatan</p>
                <h4 className="font-light pl-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum magnam iure iste, sequi vel eaque reiciendis atque
                  labore quas provident.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DisposisiSuratPage;
