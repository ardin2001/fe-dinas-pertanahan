import { AiOutlineCloseSquare } from "react-icons/ai";
import FormatDate from "../../utils/Date";
import { useState } from "react";
const ModalDisposisi = (props) => {
  const [kategori, setKategori] = useState("Kategori Disposisi");
  const [date, setDate] = useState(FormatDate());
  const { modal, HandlerEditDisposisi } = props;
  const Handlerkategori = (e) => {
    setKategori(e.target.value);
  };
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-38/100 inset-y-1/10">
      <div className="header flex justify-between py-4 w-10/12 m-auto items-center">
        <h3 className="font-semibold text-2xl text-custom">Tambah Disposisi</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerEditDisposisi}
        />
      </div>
      <div className="input w-10/12 m-auto grid gap-3">
        <div className="tanggal relative grid gap-1">
          <label htmlFor="tanggal" className="text-custom text-lg">
            Tanggal Disposisi
          </label>
          <input
            type="date"
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            value={date}
            id="tanggal"
            name="tanggal"
          />
        </div>
        <div className="disposisi relative grid gap-1">
          <label htmlFor="disposisi" className="text-custom text-lg">
            Disposisi
          </label>
          <select
            id="disposisi"
            onChange={Handlerkategori}
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            name="disposisi"
          >
            <option className="font-normal" value="Kategori Surat">
              Kategori Surat
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
        <div className="catatan relative grid gap-1">
          <label htmlFor="catatan" className="text-custom text-lg">
            Catatan
          </label>
          <textarea placeholder="Tambahkan catatan....." className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg h-48"/>
        </div>
        <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center mt-3">
          <div className="grid grid-flow-col gap-2 items-center py-2 bg-red-500 rounded-lg">
            <p>Batal</p>
          </div>
          <div className="grid grid-flow-col gap-2 items-center py-2 bg-secondary rounded-lg">
            <p>Simpan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDisposisi;
