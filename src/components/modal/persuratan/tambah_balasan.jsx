import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import FormatDate from "../../../utils/Date";
import { FaFile } from "react-icons/fa";
import { PostBalasanSurat } from "../../../utils/FetchBalasanSurat";

const ModalTambahBalasan = (props) => {
  const { modal, HandlerTambahBalasan, id } = props;
  const [date, setDate] = useState(FormatDate());
  const [letter_date, setLetterDate] = useState(FormatDate());

  const HandleTambahBalasan = async (e) => {
    e.preventDefault();
    console.log(e.target.nomor.value, e.target.status.value, e.target.perihal.value, e.target.lampiran.files[0]);
    let formData = new FormData();
    formData.append("reference_number2", e.target.nomor.value);
    formData.append("status", e.target.status.value);
    formData.append("outgoing_letter_date", letter_date);
    formData.append("file", e.target.lampiran.files[0]);
    formData.append("note", e.target.perihal.value);
    const response = await PostBalasanSurat(id, formData);
    console.log(response);
    if (response.status) {
      console.log("Surat Berhasil dibalas");
      HandlerTambahSurat();
    } else {
      console.log("Surat Gagal Disurahkan");
    }
  };

  if (!modal) {
    return null;
  }

  return (
    <div className="modal fixed bg-white border-solid font-poppins rounded-lg drop-shadow-custom z-50 inset-x-2/10 inset-y-1/10 px-8 py-4 grid grid-rows-6">
      <div className="header flex justify-between items-start row-start-1 row-end-2 my-auto">
        <h3 className="font-extrabold text-xl text-custom">Tambah Balasan</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerTambahBalasan}
        />
      </div>
      <form
        onSubmit={HandleTambahBalasan}
        className="input grid grid-cols-2 gap-x-8 row-start-2 row-end-5 gap-y-2"
      >
        <div className="tanggal grid gap-1 content-start">
          <label
            htmlFor="nomor"
            className="text-custom text-base font-semibold"
          >
            Nomor Surat
          </label>
          <input
            type="text"
            className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            placeholder="Nomor surat..."
            id="nomor"
            name="nomor"
          />
        </div>
        <div className="tanggal grid gap-1 content-start">
          <label
            htmlFor="tanggal"
            className="text-custom text-base font-semibold"
          >
            Tanggal Surat
          </label>
          <input
            type="date"
            className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            value={letter_date}
            id="tanggal"
            name="tanggal"
            onChange={(e) => setLetterDate(e.target.value)}
          />
        </div>
        <div className="perihal grid gap-1 content-start">
          <label
            htmlFor="perihal"
            className="text-custom text-base font-semibold"
          >
            Perihal Surat
          </label>
          <input
            type="text"
            className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            placeholder="Perihal surat..."
            id="perihal"
            name="perihal"
          />
        </div>
        <div className="keterangan grid gap-1">
          <label
            htmlFor="keterangan"
            className="text-custom text-base font-semibold"
          >
            Keterangan
          </label>
          <input
            type="text"
            className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            placeholder="Keterangan..."
            id="keterangan"
            name="keterangan"
          />
        </div>
        <div className="status grid gap-1 content-start">
          <label
            htmlFor="status"
            className="text-custom text-base font-semibold"
          >
            Status Surat
          </label>
          <select
            id="status"
            className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            name="status"
          >
            <option className="font-normal" value="">
              Pilih Status Surat
            </option>
            <option className="font-normal" value="1">
              Penting
            </option>
            <option className="font-normal" value="2">
              Biasa
            </option>
            <option className="font-normal" value="3">
              Tidak Penting
            </option>
          </select>
        </div>
        <div className="lampiran grid gap-1 relative content-start">
          <label
            htmlFor="lampiran"
            className="text-custom text-base font-semibold"
          >
            Lampiran
          </label>
          <div className="custom-input grid grid-flow-col outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg justify-between">
            <p>Pilih File</p>
            <FaFile />
          </div>
          <input
            type="file"
            className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg absolute top-5/10 opacity-0 -translate-y-1/4"
            id="lampiran"
            name="lampiran"
          />
        </div>
        <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center w-1/3 justify-self-end items-end row-start-5 row-end-7">
          <div className="grid grid-flow-col gap-2 items-center py-1 bg-red-500 rounded-lg">
            <button>Batal</button>
          </div>
          <div className="grid grid-flow-col gap-2 items-center py-1 bg-secondary rounded-lg">
            <button type="submit">Simpan</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalTambahBalasan;
