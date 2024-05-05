import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { data } from "../../utils/DataBalasanSurat";
import { Link } from "react-router-dom";
import ModalTambahBalasan from "../../components/modal/persuratan/tambah_balasan";
import ModalEditBalasan from "../../components/modal/persuratan/edit_balasan";
import ModalDetailBalasan from "../../components/modal/persuratan/detail-balasan";
import { GetBalasanSurat,DeleteBalasanSurat } from "../../utils/FetchBalasanSurat";
const BalasanSuratPage = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [surat, setSurat] = useState([]);
  const [tambah, setTambah] = useState(false);
  const [edit, setEdit] = useState(false);
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    GetBalasanSurat().then((res) => {
      setSurat(res.data);
      setLoading(true);
    });
  }, []);
  const HandlerDeleteBalasan = (id) => {
    DeleteBalasanSurat(id).then((res) => {
      setSurat(prev => {{
        return prev.filter(item => item.id !== id)
      }})
    })
  }
  const HandlerTambahBalasan = () => {
    setTambah((prev) => !prev);
  };
  const HandlerEditBalasan = () => {
    setEdit((prev) => !prev);
  };
  const HandlerDetailBalasan = () => {
    setDetail((prev) => !prev);
  };
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-sans">
      <ModalTambahBalasan
        modal={tambah}
        HandlerTambahBalasan={HandlerTambahBalasan}
      />
      <ModalEditBalasan modal={edit} HandlerEditBalasan={HandlerEditBalasan} />
      <ModalDetailBalasan
        modal={detail}
        HandlerDetailBalasan={HandlerDetailBalasan}
      />
      <Sidebar modal={tambah} modal2={edit} />
      <div
        className={`content col-start-2 col-end-6 w-97/100 ${
          tambah || edit || detail ? "blur-sm" : null
        }`}
      >
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Balasan Surat</h2>
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
            <div
              className="right bg-secondary rounded-lg text-white grid justify-center content-center px-5 cursor-pointer"
              onClick={HandlerTambahBalasan}
            >
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
                  <th className="py-2">Keterangan</th>
                  <th className="py-2">Tanggal</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Aksi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {console.log(surat)}
                {!loading ? null :(
                  surat.map((item, index) => (
                    <tr
                      key={index}
                      className={`${(index + 1) % 2 == 0 ? "bg-quinary" : null} `}
                    >
                      <td className="py-2.5 text-sm">{item.id}</td>
                      <td className="py-2.5 text-sm">{item.from}</td>
                      <td className="py-2.5 text-sm">
                        {item.note.substring(0, 35)}
                        {item.note.length > 35 ? "....." : ""}
                      </td>
                      <td className="py-2.5 text-sm">{item.updated_at}</td>
                      <td className={`grid justify-items-center py-2.5 text-sm`}>
                        <p
                          className={`${
                            item.status != "Pending"
                              ? "bg-green-200 text-green-500"
                              : "bg-red-300 text-red-600"
                          } px-4 rounded-lg text-xs py-1`}
                        >
                          {item.status != "Pending" ? "Diterima" : "Pending"}
                        </p>
                      </td>
                      <td className="py-2">
                        <div className="aksi flex justify-center gap-2">
                          <MdModeEdit
                            className="text-secondary"
                            onClick={HandlerEditBalasan}
                          />
                          <IoMdEye
                            className="text-yellow-300"
                            onClick={HandlerDetailBalasan}
                          />
                          <MdDeleteOutline className="text-red-500" onClick={()=>HandlerDeleteBalasan(item.id)} />
                        </div>
                      </td>
                      <td>
                        <Link to={"/surat-masuk/disposisi-surat"}>
                          <div className="right bg-secondary rounded-xl text-white grid justify-center w-8/12 m-auto">
                            <div className="grid grid-flow-col gap-1 items-center py-1">
                              <p className="font-medium">Tambah Balasan</p>
                            </div>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BalasanSuratPage;
