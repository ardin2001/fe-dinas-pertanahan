import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import FormatDate from "../../../utils/Date";
import { getShowFileBalas } from "../../../utils/FetchBalasanSurat";

const ModalDetailBalasan = (props) => {
  const { modal, HandlerDetailBalasan, surat } = props;
  const [date, setDate] = useState(FormatDate());
  const [fileUrl, setFileUrl] = useState("");

  if (!modal || !surat) {
    return null;
  }

  const handleViewFile = async (id) => {
    const url = await getShowFileBalas(id);
    setFileUrl(url);
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bg-white rounded-lg drop-shadow-custom z-50 inset-x-3/10 inset-y-15/100 px-8 py-6 grid">
      <div className="header flex justify-between items-start">
        <h3 className="font-bold text-xl text-custom">Detail Balasan</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom cursor-pointer"
          onClick={HandlerDetailBalasan}
        />
      </div>
      <div className="input grid gap-y-3">
        <div className="Nomor Surat">
          <p className="text-custom font-normal">Nomor Surat</p>
          <h3 className="font-bold text-custom">
            {surat.replyletter[0].reference_number2}
          </h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Pengirim</p>
          <h3 className="font-bold text-custom">{surat.replyletter[0].from}</h3>
        </div>
        <div className="tanggal">
          <p className="text-custom font-normal">Tanggal Surat</p>
          <h3 className="font-bold text-custom">
            {surat.replyletter[0].outgoing_letter_date}
          </h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Keterangan</p>
          <h3 className="font-bold text-custom">{surat.replyletter[0].note}</h3>
        </div>
        <div className="file border-secondary border-1.5 flex w-1/4 px-4 py-3 justify-between items-center rounded-xl">
          <button
            onClick={() => handleViewFile(surat.replyletter[0].id)}
            className="cursor-pointer"
          >
            Lihat File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailBalasan;
