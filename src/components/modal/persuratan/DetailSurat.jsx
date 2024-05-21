import { AiOutlineCloseSquare } from "react-icons/ai";
import { getShowFile } from "../../../utils/FetchSuratMasuk";
import { useState } from "react";

const ModalDetailSurat = (props) => {
  const { modal, HandlerDetailSurat, surat } = props;
  const [fileUrl, setFileUrl] = useState("");

  if (!modal || !surat) {
    return null;
  }

  const handleViewFile = async (id) => {
    const url = await getShowFile(id);
    setFileUrl(url);
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bg-white rounded-lg drop-shadow-custom z-50 inset-x-2/10 inset-y-1/10 px-8 py-6 grid">
      <div className="header flex justify-between items-start">
        <h3 className="font-bold text-xl text-custom">Detail Surat</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom cursor-pointer"
          onClick={HandlerDetailSurat}
        />
      </div>
      <div className="input grid gap-y-3 mt-4">
        <div className="name">
          <p className="text-custom font-normal">Nama Pengirim</p>
          <h3 className="text-2xl font-bold text-custom">
            {surat.letter.from}
          </h3>
        </div>
        <div className="tanggal">
          <p className="text-custom font-normal">Tanggal Surat</p>
          <h3 className="font-bold text-custom">{surat.letter.letter_date}</h3>
        </div>
        <div className="tanggal-diterima">
          <p className="text-custom font-normal">Tanggal Diterima</p>
          <h3 className="font-bold text-custom">
            {surat.letter.received_date}
          </h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Perihal</p>
          <h3 className="font-bold text-custom">
            {surat.letter.description}
          </h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Nomor Surat</p>
          <h3 className="font-bold text-custom">
            {surat.letter.reference_number}
          </h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Jenis Pengajuan</p>
          <h3 className="font-bold text-custom">{surat.letter.letters_type}</h3>
        </div>
        <div className="file border-secondary border-1.5 flex w-1/4 px-4 py-3 justify-between items-center rounded-xl">
          <button
            onClick={() => handleViewFile(surat.letter.id)}
            className="cursor-pointer"
          >
            Lihat File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailSurat;
