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
    <>
      <div className="modal fixed flex flex-col justify-between bg-white border-solid border-2 rounded-lg p-10 drop-shadow-2xl z-30 inset-x-2/10 inset-y-1/10 px-8 py-4 font-sans">
        <div className="modal-header flex justify-between items-center my-auto">
          <h3 className="font-bold text-2xl text-custom">Tambah Surat</h3>
          <AiOutlineCloseSquare
            size={"1.5rem"}
            className="text-custom"
            onClick={HandlerTambahSurat}
          />
        </div>

        <div className="modal-body grid grid-cols-2 gap-5 my-auto">
          <div className="tanggal grid gap-1">
            <label
              htmlFor="nomor"
              className="text-custom text-base font-medium"
            >
              Nomor Surat
            </label>
            <input
              type="text"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              placeholder="Masukkan Nomor Surat"
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
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
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
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              value={date}
              id="tanggal"
              name="tanggal"
            />
          </div>

          <div className="tanggal grid gap-1">
            <label
              htmlFor="nomor"
              className="text-custom text-base font-medium"
            >
              Perihal Surat
            </label>
            <input
              type="text"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              placeholder="Masukkan Perihal Surat"
              id="nomor"
              name="nomor"
            />
          </div>
          <div className="tanggal grid gap-1">
            <label
              htmlFor="nomor"
              className="text-custom text-base font-medium"
            >
              Nama Pengirim
            </label>
            <input
              type="text"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              placeholder="Masukkan Nama Pengirim"
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
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              name="disposisi"
            >
              <option className="font-normal" value="">
                Jenis Surat
              </option>
              <option className="font-normal" value="penting">
                Surat 1
              </option>
              <option className="font-normal" value="biasa">
                Surat 2
              </option>
              <option className="font-normal" value="tidak penting">
                Surat 3
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
            <div className="custom-input grid grid-flow-col outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg justify-between">
              <p>Pilih File</p>
              <FaFile className="mt-1" />
            </div>
            <input
              type="file"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg absolute top-5/10 opacity-0 -translate-y-1/4"
              id="lampiran"
              name="lampiran"
            />
          </div>
        </div>

        <div className="modal-footer flex justify-end gap-5 text-white font-semibold text-center my-auto">
          <button
            type="button"
            className="items-center p-3 bg-red-500 rounded-lg "
          >
            Batal
          </button>
          <button
            type="button"
            className="items-center p-3 bg-secondary rounded-lg "
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalTambahSurat;
