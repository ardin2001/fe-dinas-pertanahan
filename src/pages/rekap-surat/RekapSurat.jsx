import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import FormatDate from "../../utils/Date";
import { FaFile, FaSearch } from "react-icons/fa";
import { GetRekapSurat } from "../../utils/FetchRekapSurat";
import { getShowFile } from "../../utils/FetchSuratMasuk";
import UseAuth from "../../hooks/UseAuth";

const RekapSuratPage = () => {
  const auth = UseAuth()
  const [kategori, setKategori] = useState("Kategori Surat");
  const [tanggal, setTanggal] = useState(FormatDate());
  const [surat, setSurat] = useState({});
  const [fileUrl, setFileUrl] = useState("");
  const Handlerkategori = (e) => {
    setKategori(e.target.value);
  };
  const HandlerTanggal = (e) => {
    setTanggal(e.target.value);
  };
  useEffect(() => {
    GetRekapSurat().then((res) => {
      setSurat(res.data);
    });
  }, []);

  const handleViewFile = async (id) => {
    const url = await getShowFile(id);
    setFileUrl(url);
    window.open(url, "_blank");
  };

  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-quinary">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Rekap Surat</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl drop-shadow-custom p-6 font-poppins">
          <div className="search grid grid-flow-col grid-cols-8 gap-8">
            <div className="left col-start-1 col-end-8 grid grid-cols-2 gap-4">
              <div className="kategori">
                <select
                  id="month"
                  onChange={Handlerkategori}
                  className="font-semibold outline-none rounded-lg w-full outline-2 py-2 pl-2 outline-quaternary text-quaternary outline-offset-0 text-sm p-1"
                >
                  <option className="font-semibold" value="Kategori Surat">
                    Kategori Surat
                  </option>
                  <option className="font-semibold" value="penting">
                    Penting
                  </option>
                  <option className="font-semibold" value="biasa">
                    Biasa
                  </option>
                  <option className="font-semibold" value="tidak penting">
                    Tidak Penting
                  </option>
                </select>
              </div>
              <div className="tanggal">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={tanggal}
                  className="font-semibold outline-none rounded-md w-full outline-2 py-2 outline-quaternary text-quaternary outline-offset-0 text-sm p-1"
                  onChange={HandlerTanggal}
                />
              </div>
            </div>
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center">
              <div className="grid grid-flow-col w-10/12 gap-2 items-center">
                <FaSearch size="1rem" />
                <p>Cari</p>
              </div>
            </div>
          </div>
          <div className="tabel mt-7">
            <table className="table-auto w-full text-center">
              <thead className="text-white font-semibold bg-secondary">
                <tr className="">
                  <th className="py-2 text-sm text-start pl-5">No</th>
                  <th className="py-2 text-sm text-start">Pengirim</th>
                  <th className="py-2 text-sm text-start">Disposisi</th>
                  <th className="py-2 text-sm ">Tanggal</th>
                  <th className="py-2 text-sm ">Status</th>
                  <th className="py-2 text-sm ">Draft</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {surat?.letter?.map((item, index) => (
                  <tr
                    key={index}
                    className={`${(index + 1) % 2 == 0 ? "bg-quinary" : null} `}
                  >
                    <td className="py-3 text-sm">{index + 1}</td>
                    <td className="py-3 text-sm text-start">{item.from}</td>
                    <td className="py-3 text-sm text-start ">
                      <ul className="list-disc list-inside">
                        {item.disposition_process.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 text-sm">{item.letter_date}</td>
                    <td className="py-3 text-sm">{item.status}</td>
                    <td className="py-6 text-sm grid place-items-center">
                      <FaFile
                        className="text-primary cursor-pointer"
                        type="button"
                        onClick={() => handleViewFile(surat.letter[0].id)}
                      />
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

export default RekapSuratPage;
