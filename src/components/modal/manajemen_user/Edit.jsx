import { AiOutlineCloseSquare } from "react-icons/ai";
const ModalEdit = (props) => {
  const { modal, HandlerEdit } = props;
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-38/100 inset-y-1/10">
      <div className="header flex justify-between py-4 w-10/12 m-auto items-center">
        <h3 className="font-semibold text-2xl text-custom">Edit User</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerEdit}
        />
      </div>
      <div className="input w-10/12 m-auto grid gap-3">
        <div className="username relative grid gap-1">
          <label htmlFor="username" className="text-custom font-semibold">
            Username
          </label>
          <input type="text" className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"/>
        </div>
        <div className="email relative grid gap-1">
          <label htmlFor="email" className="text-custom font-semibold">
            Email
          </label>
          <input type="email" className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"/>
        </div>
        <div className="password relative grid gap-1">
          <label htmlFor="password" className="text-custom font-semibold">
            Password
          </label>
          <input type="password" className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"/>
        </div>
        <div className="repassword relative grid gap-1">
          <label htmlFor="repassword" className="text-custom font-semibold">
            Konfirmasi Password
          </label>
          <input type="password" className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"/>
        </div>
        <div className="notelp relative grid gap-1">
          <label htmlFor="notelp" className="text-custom font-semibold">
            Nomor Telepon
          </label>
          <input type="text" className="outline-none border-2 border-secondary w-full py-2.5 px-3 text-sm text-custom rounded-lg"/>
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

export default ModalEdit;
