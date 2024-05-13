import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import FormatDate from "../../../utils/Date";
import { FaFile } from "react-icons/fa";
import {
  PostSuratMasuk,
  GetDetailSuratMasuk,
} from "../../../utils/FetchSuratMasuk";

const ModalTambahSurat = (props) => {
  const { modal, HandlerTambahSurat, setSurat } = props;
  const [letter_date, setLetterDate] = useState(FormatDate());
  const [received_date, setReceivedDate] = useState(FormatDate());

  if (!modal) {
    return null;
  }
  const HandlerSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("letters_number", e.target.letters_number.value);
    formData.append("letters_type", e.target.letters_type.value);
    formData.append("letter_date", letter_date);
    formData.append("received_date", received_date);
    formData.append("from", e.target.nama.value);
    formData.append("file", e.target.file.files[0]);
    formData.append("description", e.target.perihal.value);

    const { status, data } = await PostSuratMasuk(formData);
    if (status) {
      const response = await GetDetailSuratMasuk(data.letter.id);
      if (response.status) {
        setSurat((prev) => ({
          letter: [...prev.letter, response.data.letter],
          file: [...prev.file, response.data.file],
        }));
        HandlerTambahSurat();
      }
    }
  };

  return (
    <div className="modal fixed grid flex-col content-around bg-white rounded-lg drop-shadow-2xl z-30 inset-x-2/10 inset-y-1/10 px-8 font-poppins">
      <div className="modal-header flex justify-between items-center my-auto">
        <h3 className="font-extrabold text-xl text-custom">Tambah Surat</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerTambahSurat}
        />
      </div>
      <form onSubmit={HandlerSubmit}>
        <div className="modal-body grid grid-cols-2 gap-5 my-auto">
          <div className="tanggal grid gap-1">
            <label
              htmlFor="letters_number"
              className="text-custom text-base font-semibold"
            >
              Nomor Surat
            </label>
            <input
              type="text"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              placeholder="Masukkan Nomor Surat"
              id="letters_number"
              name="letters_number"
            />
          </div>
          <div className="tanggal grid gap-1">
            <label
              htmlFor="letters_date"
              className="text-custom text-base font-semibold"
            >
              Tanggal Surat
            </label>
            <input
              type="date"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              value={letter_date}
              id="letters_date"
              name="letters_date"
              onChange={(e) => setLetterDate(e.target.value)}
            />
          </div>
          <div className="tanggal grid gap-1">
            <label
              htmlFor="tanggal-diterima"
              className="text-custom text-base font-semibold"
            >
              Tanggal Diterima
            </label>
            <input
              type="date"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              value={received_date}
              id="tanggal-diterima"
              name="tanggal-diterima"
              onChange={(e) => setReceivedDate(e.target.value)}
            />
          </div>

          <div className="perihal grid gap-1">
            <label
              htmlFor="perihal"
              className="text-custom text-base font-semibold"
            >
              Perihal Surat
            </label>
            <input
              type="text"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              placeholder="Masukkan Perihal Surat"
              id="perihal"
              name="perihal"
            />
          </div>
          <div className="nama grid gap-1">
            <label
              htmlFor="nama"
              className="text-custom text-base font-semibold"
            >
              Nama Pengirim
            </label>
            <input
              type="text"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              placeholder="Masukkan Nama Pengirim"
              id="nama"
              name="nama"
            />
          </div>

          <div className="letters_type grid gap-1">
            <label
              htmlFor="letters_type"
              className="text-custom text-base font-semibold"
            >
              Jenis Surat
            </label>
            <select
              id="letters_type"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              name="letters_type"
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

          <div className="file grid gap-1 relative">
            <label
              htmlFor="file"
              className="text-custom text-base font-semibold"
            >
              Lampiran
            </label>
            <div className="custom-input grid grid-flow-col outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg justify-between">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-custom"
              >
                <input type="file" id="file-upload" name="file-upload" />
              </label>
              <input
                type="file"
                className="sr-only outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg absolute top-5/10 opacity-0 -translate-y-1/4"
                id="file"
                name="file-upload"
              />
            </div>
          </div>
        </div>
        <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center w-1/3 justify-self-end items-end row-start-5 row-end-7"></div>
        <div className="modal-footer flex justify-end gap-5 text-white font-semibold text-center my-auto">
          <button
            type="button"
            className="items-center p-3 bg-custom rounded-lg "
          >
            Batal
          </button>
          <button
            type="submit"
            className="items-center p-3 bg-secondary rounded-lg "
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalTambahSurat;
