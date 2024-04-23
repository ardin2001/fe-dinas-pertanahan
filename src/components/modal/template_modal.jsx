import { AiOutlineCloseSquare } from "react-icons/ai";
const ModalTambahSurat = (props) => {
  const { modal, HandlerTambahSurat } = props;
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-1/10 inset-y-1/10">
      <div className="header flex justify-between py-2.5 w-10/12 m-auto items-center">
        <h3 className="font-semibold text-xl text-custom">Modal template</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerTambahSurat}
        />
      </div>
      <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center">
        <div className="grid grid-flow-col gap-2 items-center py-2 bg-red-500 rounded-lg">
          <p>Batal</p>
        </div>
        <div className="grid grid-flow-col gap-2 items-center py-2 bg-secondary rounded-lg">
          <p>Simpan</p>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahSurat;
