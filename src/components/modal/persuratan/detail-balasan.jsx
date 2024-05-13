import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import FormatDate from "../../../utils/Date";
import { IoMdEye } from "react-icons/io";
const ModalDetailBalasan = (props) => {
  const { modal, HandlerDetailBalasan,surat } = props;
  console.log('HandlerDetailBalasan :',modal)
  const [date, setDate] = useState(FormatDate());
  if (!modal || !surat) {
    return null;
  }
  {console.log(surat)}
  return (
    <div className="fixed bg-white rounded-lg drop-shadow-custom z-50 inset-x-3/10 inset-y-15/100 px-8 py-6 grid">
      <div className="header flex justify-between items-start">
        <h3 className="font-bold text-xl text-custom">Detail Balasan</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerDetailBalasan}
        />
      </div>
      <div className="input grid gap-y-3">
        <div className="perihal">
          <p className="text-custom font-normal">Nomor Surat</p>
          <h3 className="font-bold text-custom">{surat.replyletter[0].reference_number2}</h3>
        </div>
        <div className="tanggal">
          <p className="text-custom font-normal">Tanggal Surat</p>
          <h3 className="font-bold text-custom">{surat.replyletter[0].outgoing_letter_date}</h3>
        </div>
        <div className="tanggal-diterima">
          <p className="text-custom font-normal">Keterangan</p>
          <h3 className="font-bold text-custom">{surat.replyletter[0].note}</h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Perihal Surat</p>
          <h3 className="font-bold text-custom">-</h3>
        </div>
        <div className="file border-secondary border-1.5 flex w-1/3 px-4 py-1.5 justify-between items-center rounded-xl">
          <p>pengajuan.zip</p>
          <IoMdEye />
        </div>
      </div>
      <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center w-1/2 justify-self-end items-end">
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

export default ModalDetailBalasan;
