import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import FormatDate from "../../../utils/Date";
import { FaFile } from "react-icons/fa";
const ModalTambahSurat = (props) => {
  const { modal, HandlerTambahSurat } = props;
  const [date, setDate] = useState(FormatDate());
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-2/10 inset-y-1/10 px-8 py-4 grid">
      <div className="header flex justify-between items-center">
        <h3 className="font-bold text-xl text-custom">Tambah Surat</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerTambahSurat}
        />
      </div>
      <div className="input grid grid-cols-2 gap-x-8 gap-y-5 mt-4">
        <div className="tanggal grid gap-1">
          <label htmlFor="nomor" className="text-custom text-base font-medium">
            Nomor Surat
          </label>
          <input
            type="text"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            placeholder="Nomor surat..."
            id="nomor"
            name="nomor"
          />
        </div>
        <div className="tanggal grid gap-1">
          <label
            htmlFor="tanggal"
            className="text-custom text-base font-medium"
          >
            Tanggal Surat
          </label>
          <input
            type="date"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            value={date}
            id="tanggal"
            name="tanggal"
          />
        </div>
        <div className="tanggal grid gap-1">
          <label
            htmlFor="tanggal"
            className="text-custom text-base font-medium"
          >
            Tanggal Diterima
          </label>
          <input
            type="date"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            value={date}
            id="tanggal"
            name="tanggal"
          />
        </div>
        <div className="tanggal grid gap-1">
          <label htmlFor="nomor" className="text-custom text-base font-medium">
            Perihal Surat
          </label>
          <input
            type="text"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            placeholder="Perihal surat..."
            id="nomor"
            name="nomor"
          />
        </div>
        <div className="tanggal grid gap-1">
          <label htmlFor="nomor" className="text-custom text-base font-medium">
            Nama Pengirim
          </label>
          <input
            type="text"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            placeholder="Nama pengirim..."
            id="nomor"
            name="nomor"
          />
        </div>
        <div className="disposisi grid gap-1">
          <label htmlFor="disposisi" className="text-custom text-lg">
            Jenis Surat
          </label>
          <select
            id="disposisi"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            name="disposisi"
          >
            <option className="font-normal" value="">
              Pilih Jenis Surat
            </option>
            <option className="font-normal" value="penting">
              Penting
            </option>
            <option className="font-normal" value="biasa">
              Biasa
            </option>
            <option className="font-normal" value="tidak penting">
              Tidak Penting
            </option>
          </select>
        </div>
        <div className="lampiran grid gap-1 relative">
          <label
            htmlFor="lampiran"
            className="text-custom text-base font-medium"
          >
            Lampiran
          </label>
          <div className="custom-input grid grid-flow-col outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg justify-between">
            <p>Pilih File</p>
            <FaFile />
          </div>
          <input
            type="file"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg absolute top-5/10 opacity-0 -translate-y-1/4"
            id="lampiran"
            name="lampiran"
          />
        </div>
      </div>

      <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center mt-16 w-1/3 justify-self-end">
        <div className="grid grid-flow-col gap-2 items-center py-1 bg-red-500 rounded-lg">
          <p>Batal</p>
        </div>
        <div className="grid grid-flow-col gap-2 items-center py-1 bg-secondary rounded-lg">
          <p>Simpan</p>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahSurat;
