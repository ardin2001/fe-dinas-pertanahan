import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import ModalTambahSurat from "../../components/modal/persuratan/tambah_surat";
import ModalEditSurat from "../../components/modal/persuratan/edit_surat";
import ModalDetailSurat from "../../components/modal/persuratan/detail_surat";
import {
  GetSuratMasuk,
  GetDetailSuratMasuk,
  DeleteSuratMasuk,
} from "../../utils/FetchSuratMasuk";
import ModalTambahBalasan from "../../components/modal/persuratan/tambah_balasan";

const SuratMasukPage = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [surat, setSurat] = useState([]);
  const [detail, setDetail] = useState(false);
  const [tambah, setTambah] = useState(false);
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    GetSuratMasuk().then((res) => {
      setSurat(res.data);
      setLoading(true);
    });
  }, []);

  const HandlerDeleteSurat = (id) => {
    DeleteSuratMasuk(id).then((res) => {
      setSurat((prev) => {
        return {
          letter: prev.letter.filter((surat) => surat.id !== id),
          file: prev.file.filter((surat) => surat.id !== id),
        };
      });
    });
  };

  const HandlerTambahSurat = () => {
    setModal((prev) => !prev);
  };

  const HandlerEditSurat = (id) => {
    GetDetailSuratMasuk(id).then((res) => {
      setDetail(res.data);
      setModal2((prev) => !prev);
    });
  };
  
  const HandlerDetailSurat = (id) => {
    GetDetailSuratMasuk(id).then((res) => {
      setDetail(res.data);
      setModal3((prev) => !prev);
    });
  };
  
  const HandlerTambahBalasan = () => {
    setTambah((prev) => !prev);
  };

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-poppins">
      <ModalTambahSurat modal={modal} HandlerTambahSurat={HandlerTambahSurat} setSurat={setSurat} />
      <ModalEditSurat
        modal={modal2}
        HandlerEditSurat={HandlerEditSurat}
        surat={detail}
        setSurat={setSurat}
      />
      <ModalDetailSurat
        modal={modal3}
        HandlerDetailSurat={HandlerDetailSurat}
        surat={detail}
      />
      <ModalTambahBalasan
        modal={tambah}
        HandlerTambahBalasan={HandlerTambahBalasan}
      />
      <Sidebar modal={modal} modal2={modal2} modal3={modal3} />
      <div
        className={`content col-start-2 col-end-6 w-97/100 ${
          tambah || modal || modal2 || modal3 ? "blur-sm" : null
        }`}
      >
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Surat Masuk</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl drop-shadow-custom p-6">
          <div className="search flex gap-4 justify-between">
            <div className="left w-1/3 flex relative">
              <input
                type="text"
                className="outline-none rounded-lg w-full outline-2 outline-quaternary  text-quaternary outline-offset-0 text-xs py-3 px-3 font-light italic"
                onChange={HandlerSearch}
                value={search}
                placeholder="Cari disini..."
              />
              <FaSearch className="absolute right-2 top-3 text-secondary" />
            </div>
            <div
              className="right bg-secondary rounded-lg text-white grid justify-center content-center px-5 cursor-pointer"
              onClick={HandlerTambahSurat}
            >
              <div className="grid grid-flow-col gap-2 text-sm items-center py-2">
                <GoPlus size="1rem" />
                <button>Tambah Surat</button>
              </div>
            </div>
          </div>
          <div className="tabel mt-7">
            <table className="table-auto w-full text-center text-sm font-normal font-poppins">
              <thead className="text-white  bg-secondary">
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
                {!loading
                  ? null
                  : surat.letter.map((item, index) => (
                      <tr
                        key={index}
                        className={`${
                          (index + 1) % 2 == 0 ? "bg-quinary" : null
                        } `}
                      >
                        <td className="py-2.5 text-sm">{index + 1}</td>
                        <td className="py-2.5 text-sm">{item.from}</td>
                        <td className="py-2.5 text-sm">{item.letters_type}</td>
                        <td className="py-2.5 text-sm">{item.letter_date}</td>
                        <td className="py-2">
                          <div className="aksi flex justify-center gap-2">
                            <MdModeEdit
                              className="text-secondary"
                              type="button"
                              onClick={() => HandlerEditSurat(item.id)}
                            />
                            <IoMdEye
                              className="text-yellow-300"
                              type="button"
                              onClick={() => HandlerDetailSurat(item.id)}
                            />
                            <MdDeleteOutline
                              className="text-red-500"
                              type="button"
                              onClick={() => HandlerDeleteSurat(item.id)}
                            />
                          </div>
                        </td>
                        <td>
                          <div
                            onClick={HandlerTambahBalasan}
                            className="right bg-secondary rounded-xl text-white grid justify-center w-10/12 m-fixed"
                          >
                            <div className="grid grid-flow-col gap-1 items-center py-1">
                              <button className="font-medium">
                                Tambah Balasan
                              </button>
                            </div>
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

export default SuratMasukPage;
