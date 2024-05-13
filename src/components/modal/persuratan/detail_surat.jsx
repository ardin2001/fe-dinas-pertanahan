import { AiOutlineCloseSquare } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
const ModalDetailSurat = (props) => {
  const { modal, HandlerDetailSurat,surat } = props;
  if (!modal || !surat) {
    return null;
  }
  return (
    <div className="fixed bg-white rounded-lg drop-shadow-custom z-50 inset-x-2/10 inset-y-1/10 px-8 py-6 grid">
      <div className="header flex justify-between items-start">
        <h3 className="font-bold text-xl text-custom">Detail Surat</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerDetailSurat}
        />
      </div>
      <div className="input grid gap-y-3 mt-4">
        <div className="name">
          <p className="text-custom font-normal">Nama Pengirim</p>
          <h3 className="text-2xl font-bold text-custom">{surat.letter.from}</h3>
        </div>
        <div className="tanggal">
          <p className="text-custom font-normal">Tanggal Surat</p>
          <h3 className="font-bold text-custom">{surat.letter.letter_date}</h3>
        </div>
        <div className="tanggal-diterima">
          <p className="text-custom font-normal">Tanggal Diterima</p>
          <h3 className="font-bold text-custom">{surat.letter.received_date}</h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Perihal</p>
          <h3 className="font-bold text-custom">-</h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Nomor Surat</p>
          <h3 className="font-bold text-custom">{surat.letter.id}</h3>
        </div>
        <div className="perihal">
          <p className="text-custom font-normal">Jenis Pengajuan</p>
          <h3 className="font-bold text-custom">{surat.letter.letters_type}</h3>
        </div>
        <div className="file border-secondary border-1.5 flex w-1/4 px-4 py-3 justify-between items-center rounded-xl">
          <p>pengajuan.zip</p>
          <IoMdEye />
        </div>
      </div>

      <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center w-1/3 justify-self-end items-end">
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

export default ModalDetailSurat;
