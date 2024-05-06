import { AiOutlineCloseSquare } from "react-icons/ai";
const ModalDetail = (props) => {
  const { modal, HandlerDetail, user } = props;
  if (!modal || !user) {
    return null;
  }
  const ChangeDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate
  }
  return (
    <div className="fixed bg-white py-4 border-solid rounded-lg drop-shadow-custom z-50 inset-x-35/100 inset-y-1/10">
      <div className="header flex justify-between py-4 w-11/12 m-auto items-center">
        <h3 className="font-semibold text-xl text-custom">Detail User</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerDetail}
        />
      </div>
      <div className="input w-11/12 m-auto grid gap-3">
        <div className="name">
          <p className="text-custom font-normal">Nama Pengirim</p>
          <h3 className="text-2xl font-bold text-custom">{user.name}</h3>
        </div>
        <div className="email">
          <p className="text-custom font-normal">Email</p>
          <h3 className="font-bold text-custom">{user.email}</h3>
        </div>
        <div className="role-diterima">
          <p className="text-custom font-normal">Role</p>
          <h3 className="font-bold text-custom">{user.type}</h3>
        </div>
        <div className="taggal">
          <p className="text-custom font-normal">Dibuat</p>
          <h3 className="font-bold text-custom">{ChangeDate(user.created_at)}</h3>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
