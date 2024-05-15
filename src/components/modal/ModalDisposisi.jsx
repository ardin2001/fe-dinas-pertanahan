import { AiOutlineCloseSquare } from "react-icons/ai";
import { useEffect, useState } from "react";
import { PutDisposisiSurat } from "../../utils/FetchSuratMasuk";
const ModalDisposisi = (props) => {
  const [kategori, setKategori] = useState("Kategori Disposisi");
  const [date, setDate] = useState("");
  const { modal, HandlerEditDisposisi, surat, setDisposisi } = props;
  const [newSurat, setNewSurat] = useState(surat);
  const [dispositionNote, setDispositionNote] = useState("");
  const [dispositionProcess, setDispositionProcess] = useState("");
  const [dispositionProcess2, setDispositionProcess2] = useState("");

  useEffect(() => {
    if (surat) {
      setNewSurat(surat);
      setDispositionNote(surat.disposition_note);
      setDispositionProcess(surat.disposition_process[0]);
      setDispositionProcess2(surat.disposition_process[1]);
      setDate(surat.disposition_date);
    }
  }, [surat]);

  const HandlerSubmitDisposisi = async (event) => {
    event.preventDefault();
    
    let data = {
      disposition_date: date,
      disposition_process: dispositionProcess,
      disposition_process2: dispositionProcess2,
      disposition_note: dispositionNote,
    };
    const response = await PutDisposisiSurat(data, surat.id)
    if(response.status){
      const sumDisposition = [dispositionProcess,dispositionProcess2]
      setDisposisi(prev => ({...prev,disposition_note:dispositionNote,disposition_process:sumDisposition,disposition_date:date}));
      HandlerEditDisposisi();
    }
    
  };
  
  if (!modal) {
    return null;
  }
  return (
    <div
      className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-38/100 inset-y-1/10"
    >
      <div className="header flex justify-between py-4 w-10/12 m-auto items-center">
        <h3 className="font-semibold text-2xl text-custom">Edit Disposisi</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerEditDisposisi}
        />
      </div>
      <form className="input w-10/12 m-auto grid gap-3" onSubmit={HandlerSubmitDisposisi}>
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
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="disposisi relative grid gap-1">
          <label htmlFor="disposisi" className="text-custom text-lg">
            Disposisi 1
          </label>
          <select
            id="disposisi"
            onChange={(e) => setDispositionProcess(e.target.value)}
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            name="disposisi"
            value={dispositionProcess}
          >
            <option className="font-normal" value="Belum ditindak lanjuti">
              Belum ditindak lanjuti
            </option>
            <option className="font-normal" value="TU">
              TU
            </option>
            <option className="font-normal" value="Kakan">
              Kakan
            </option>
            <option className="font-normal" value="Seksi">
              Seksi
            </option>
          </select>
        </div>
        <div className="disposisi relative grid gap-1">
          <label htmlFor="disposisi" className="text-custom text-lg">
            Disposisi 2
          </label>
          <select
            id="disposisi"
            onChange={(e) => setDispositionProcess2(e.target.value)}
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"
            name="disposisi"
            value={dispositionProcess2}
          >
            <option className="font-normal" value="Belum ditindak lanjuti">
              Belum ditindak lanjuti
            </option>
            <option className="font-normal" value="TU">
              TU
            </option>
            <option className="font-normal" value="Kakan">
              Kakan
            </option>
            <option className="font-normal" value="Seksi">
              Seksi
            </option>
          </select>
        </div>
        <div className="catatan relative grid gap-1">
          <label htmlFor="catatan" className="text-custom text-lg">
            Catatan
          </label>
          <textarea
            value={dispositionNote}
            onChange={(e) => setDispositionNote(e.target.value)}
            placeholder="Tambahkan catatan....."
            className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg h-28"
          />
        </div>
        <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center mt-3">
          <button className="grid grid-flow-col gap-2 items-center py-2 bg-red-500 rounded-lg">
            <p>Batal</p>
          </button>
          <button
            type="submit"
            className="grid grid-flow-col gap-2 items-center py-2 bg-secondary rounded-lg"
          >
            <p>Simpan</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalDisposisi;
