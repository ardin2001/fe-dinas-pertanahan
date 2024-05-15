import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import ModalEditBalasan from "../../components/modal/persuratan/edit_balasan";
import ModalDetailBalasan from "../../components/modal/persuratan/detail-balasan";
import {
  GetBalasanSurat,
  GetDetailBalasan,
  DeleteBalasanSurat,
} from "../../utils/FetchBalasanSurat";
import Swal from "sweetalert2";

const BalasanSuratPage = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [surat, setSurat] = useState([]);
  const [detailSurat, setDetailSurat] = useState({});
  const [edit, setEdit] = useState({});
  const [detail, setDetail] = useState({});
  const [modalDetail, setModalDetail] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    GetBalasanSurat().then((res) => {
      setSurat(res.data);
      setLoading(true);
    });
  }, []);

  const HandlerDeleteBalasan = (id) => {
    Swal.fire({
      title: "Anda yakin ingin menghapus data ini?",
      text: "Data yang dihapus tidak dapat dipulihkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#828282",
      cancelButtonText: "Batal",
      confirmButtonText: "Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteBalasanSurat(id).then((res) => {
          setSurat((prev) => {
            {
              return {
                ...prev,
                replyletter: prev.replyletter.filter(
                  (surat) => surat.id !== id
                ),
              };
            }
          });
          Swal.fire({
            title: "Berhasil!",
            text: "Data berhasil dihapus.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };

  const HandlerEditBalasan = (id) => {
    if (id) {
      setId(id);
    }else{
      setId(null)
    }
    setModalEdit((prev) => !prev);
  };
  const HandlerDetailBalasan = (id) => {
    GetDetailBalasan(id).then((res) => {
      setDetail(res.data);
      setModalDetail((prev) => !prev);
    });
  };
  const HandlerSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary font-poppins">
      <ModalEditBalasan
        modal={modalEdit}
        HandlerEditBalasan={HandlerEditBalasan}
        id={id}
        setSurat={setSurat}
      />
      <ModalDetailBalasan
        modal={modalDetail}
        HandlerDetailBalasan={HandlerDetailBalasan}
        surat={detail}
      />
      <Sidebar modal={modalDetail} modal2={modalTambah} modal3={modalEdit} />
      <div
        className={`content col-start-2 col-end-6 w-97/100 ${
          modalDetail || modalEdit || modalTambah ? "blur-sm" : null
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
                className="outline-none rounded-lg w-full outline-2 outline-quaternary  text-quaternary outline-offset-0 text-xs py-3 px-3 font-light italic"
                onChange={HandlerSearch}
                value={search}
                placeholder="Cari disini..."
              />
              <FaSearch className="absolute right-2 top-3 text-secondary" />
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
                {!loading
                  ? null
                  : surat?.replyletter?.map((item, index) => (
                      <tr
                        key={index}
                        className={`${
                          (index + 1) % 2 == 0 ? "bg-quinary" : null
                        } `}
                      >
                        <td className="py-2.5 text-sm">{index + 1}</td>
                        <td className="py-2.5 text-sm">{item.from}</td>
                        <td className="py-2.5 text-sm">
                          {item.note ? item.note.substring(0, 35) : ""}
                          {item?.note?.length > 35 ? "....." : ""}
                        </td>
                        <td className="py-2.5 text-sm">
                          {item.outgoing_letter_date}
                        </td>
                        <td
                          className={`grid justify-items-center py-2.5 text-sm`}
                        >
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
                              onClick={() => HandlerEditBalasan(item.id)}
                            />
                            <IoMdEye
                              className="text-yellow-300"
                              onClick={() => HandlerDetailBalasan(item.id)}
                            />
                            <MdDeleteOutline
                              className="text-red-500"
                              onClick={() => HandlerDeleteBalasan(item.id)}
                            />
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

export default BalasanSuratPage;
