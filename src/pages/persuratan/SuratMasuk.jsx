import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { data } from "../../utils/DataSuratMasuk";
import { Link } from "react-router-dom";
import ModalTambahSurat from "../../components/modal/persuratan/tambah_surat";
import ModalEditSurat from "../../components/modal/persuratan/edit_surat";
import ModalDetilSurat from "../../components/modal/persuratan/detail_surat";

const SuratMasukPage = () => {
  const [search, setSearch] = useState();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };
  const HandlerTambahSurat = () => {
    setModal((prev) => !prev);
  };
  const HandlerEditSurat = () => {
    setModal2((prev) => !prev);
  };
  const HandlerDetailSurat = () => {
    setModal3((prev) => !prev);
  };

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-sans">
      <ModalTambahSurat modal={modal} HandlerTambahSurat={HandlerTambahSurat} />
      <ModalEditSurat modal={modal2} HandlerEditSurat={HandlerEditSurat} />
      <ModalDetilSurat modal={modal3} HandlerDetailSurat={HandlerDetailSurat} />
      <Sidebar modal={modal} modal2={modal2} modal3={modal3} />
      <div className={`content col-start-2 col-end-6 w-97/100 ${modal || modal2 || modal3 ? "blur-sm" : null}`}>
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Surat Masuk</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl drop-shadow-custom p-6">
          <div className="search flex gap-4 justify-between">
            <div className="left w-1/3 flex relative">
              <input
                type="text"
                className="outline-none rounded-lg w-full outline-2 outline-quaternary text-quaternary outline-offset-0 text-base py-1 px-2 italic"
                onChange={HandlerSearch}
                value={search}
                placeholder="Cari surat..."
              />
              <FaSearch className="absolute right-2 top-3 text-secondary" />
            </div>
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center px-5 cursor-pointer" onClick={HandlerTambahSurat}>
              <div className="grid grid-flow-col gap-2 items-center py-2">
                <GoPlus size="1rem" />
                <p>Tambah Surat</p>
              </div>
            </div>
          </div>
          <div className="tabel mt-7">
            <table className="table-auto w-full text-center text-sm font-normal font-sans">
              <thead className="text-white font-medium bg-secondary">
                <tr>
                  <th className="py-2">No</th>
                  <th className="py-2">Pengirim</th>
                  <th className="py-2">Jenis Surat</th>
                  <th className="py-2">Tanggal</th>
                  <th className="py-2">Aksi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 == 0 ? "bg-quinary" : null} `}
                  >
                    <td className="py-2.5 text-sm">{item.no}</td>
                    <td className="py-2.5 text-sm">{item.pengirim}</td>
                    <td className="py-2.5 text-sm">{item.jenis_surat}</td>
                    <td className="py-2.5 text-sm">{item.tanggal}</td>
                    <td className="py-2">
                      <div className="aksi flex justify-center gap-2">
                        <MdModeEdit className="text-secondary" onClick={HandlerEditSurat} />
                        <IoMdEye className="text-yellow-300" onClick={HandlerDetailSurat} />
                        <MdDeleteOutline className="text-red-500" />
                      </div>
                    </td>
                    <td>
                      <Link to={'/surat-masuk/disposisi-surat'}>
                        <div className="right bg-secondary rounded-xl text-white grid justify-center w-8/12 m-auto">
                          <div className="grid grid-flow-col gap-1 items-center py-1">
                            <p className="font-medium">Disposisi Surat</p>
                          </div>
                        </div>
                      </Link>
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

export default SuratMasukPage;
