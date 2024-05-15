import { AiOutlineCloseSquare } from "react-icons/ai";
import { useEffect, useState } from "react";
import FormatDate from "../../../utils/Date";
import { FaFile } from "react-icons/fa";
import { PutSuratMasuk } from "../../../utils/FetchSuratMasuk";
const ModalEditSurat = (props) => {
  const { modal, HandlerEditSurat, surat,setSurat } = props;
  const [no, setNo] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [letter_date, setLetterDate] = useState(null);
  const [received_date, setReceivedDate] = useState(null);
  const HandlerSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("letters_number", event.target.letters_number.value);
    formData.append("letters_type", event.target.letters_type.value);
    formData.append("letter_date", letter_date);
    formData.append("received_date", received_date);
    formData.append("from", event.target.nama.value);
    formData.append("description", event.target.perihal.value);
    formData.append("file", event.target.file.files[0]);

    const response = await PutSuratMasuk(formData, surat?.letter?.id);
    
    if (response.status === true) {
      setSurat(prev => {
        const newState = prev.letter.map((data,index) => {
          if(data.id == surat.letter.id){
            return {
              letter :{...data,...response.data.letter},
              file : {...prev.file[index],...response.data.file}
            }
          }
          return {
            letter :{...data},
            file : prev.file[index]
          }
        })
        
        return {
          letter : newState.map(data => data.letter),
          file : newState.map(data => data.file),
        }
      })
      HandlerEditSurat();
    }
  };

  useEffect(() => {
    setLetterDate(surat?.letter?.letter_date);
    setReceivedDate(surat?.letter?.received_date);
    setNo(surat?.letter?.id);
    setName(surat?.letter?.from);
    setDescription(surat?.letter?.description);
  }, [surat]);
  if (!modal || !surat) {
    return null;
  }
  
  return (
    <div className="modal fixed grid flex-col content-around bg-white rounded-lg drop-shadow-2xl z-30 inset-x-2/10 inset-y-1/10 px-8 font-poppins">
      <div className="modal-header flex justify-between items-center my-auto">
        <h3 className="font-extrabold text-xl text-custom">Edit Surat</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom cursor-pointer"
          onClick={HandlerEditSurat}
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
              value={no}
              onChange={(e) => setNo(e.target.value)}
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
              htmlFor="received_date"
              className="text-custom text-base font-semibold"
            >
              Tanggal Diterima
            </label>
            <input
              type="date"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
              value={received_date}
              id="received_date"
              name="received_date"
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              <p>Pilih File</p>
              <FaFile className="mt-1" />
            </div>
            <input
              type="file"
              className="outline-none border-2 border-quaternary w-full py-2.5 px-3 text-sm text-custom rounded-lg absolute top-5/10 opacity-0 -translate-y-1/4"
              id="file"
              name="file"
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

export default ModalEditSurat;
